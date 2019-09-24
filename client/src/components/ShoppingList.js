import React from 'react'
import { connect } from 'react-redux'
import { getItems, deleteItem, addItem } from '../actions/itemActions'
import Proptypes from 'prop-types'

class ShoppingList extends React.Component {

	componentDidMount() {
		this.props.getItems()
	}

	handleDeleteClick = (id) => {
		this.props.deleteItem(id)
	}

	render() {
		const { items } = this.props.item
		console.log(items)
		const listItem = items.map((li) => {
			return <li key={li.id}>
				<button
					onClick={this.handleDeleteClick.bind(this, li.id)}>&times;</button>
				{li.name}</li>
		})
		return (
			<div>
				{listItem}
			</div>
		)
	}
}

ShoppingList.propTypes = {
	getItems: Proptypes.func.isRequired,
	item: Proptypes.object.isRequired
}

const mapStateToProps = (state) => ({
	item: state.item
})

export default connect(mapStateToProps, {
	getItems,
	deleteItem,
	addItem
})(ShoppingList)
