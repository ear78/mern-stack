const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Posts
router.get('/', async (req, res, next) => {
	try {
		const posts = await loadPostsCollection()
		res.send(await posts.find({}).toArray())
	} catch(err){
		console.log('We\'re having trouble retrieving the data, please try again...', err)
	}

})

// Add Posts
router.post('/', async (req, res) => {
	try {
		const posts = await loadPostsCollection()
		const obj = {
			text: req.body.text,
			createdAt: new Date()
		}
		await posts.insertOne(obj)
	  res.send(await posts.find({}).toArray())
	} catch(err) {
		console.warn('We\'re having trouble adding item to the list, please try again...', err)
	}
})

// Update Posts
router.put('/:id', async (req, res) => {
	try {
		const posts = await loadPostsCollection()
		const query = { _id: new mongodb.ObjectID(req.params.id) }
		const newValues = { $set: { text: req.body.text }}
		await posts.updateOne(query, newValues)
		res.send(await posts.find({}).toArray())
	}
	catch(err) {
		console.warn('We\'re having trouble editing the app, please try again...', err)
	}
})

// Delete Posts
router.delete('/:id', async (req, res) => {
	try {
		const posts = await loadPostsCollection()
		const query = { _id: new mongodb.ObjectID(req.params.id) }
		await posts.findOneAndDelete(query, function(err, obj){
			if(err) throw err
		})
		res.send(await posts.find({}).toArray())
	}
	catch(err) {
		console.warn('We\'re having trouble deleting the specific item, please try again...', err)
	}

})

// Connecting to DB
const db = require('../../config/keys').mongoURI

async function loadPostsCollection() {
	const client = await mongodb.MongoClient.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

	return client.db('mern1').collection('posts')
}

module.exports = router
