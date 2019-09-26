const express = require('express')
const mongodb = require('mongodb').MongoClient

const router = express.Router()

// Get Posts
router.get('/', async (req, res, next) => {
	try {
		const posts = await loadPostsCollection()
		res.send(await posts.find({}).toArray())
	} catch(err){
		console.log('having trouble retrieving the data')
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
		res.status()
	}
})

// Update Posts
router.put('/:id', async (req, res) => {
	const posts = await loadPostsCollection()
	const query = { _id: new mongodb.ObjectID(req.params.id) }
	await posts.updateOne(query, { $set: { text: req.body.text } })
	res.status(201).send()
})

// Delete Posts
router.delete('/:id', async (req, res) => {
	const posts = await loadPostsCollection()
	await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
	res.status(200).send()
})

// Connecting to DB
const db = require('../../config/keys').mongoURI

async function loadPostsCollection() {
	const client = await mongodb.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

	return client.db('mern1').collection('posts')
}

module.exports = router
