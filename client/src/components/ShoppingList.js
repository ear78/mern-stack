import React from 'react'

import ButtonList from './ui/ButtonList/ButtonList'

import { connect } from 'react-redux'
import { getItems, deleteItem, addItem, updateItem } from '../actions/itemActions'
import Proptypes from 'prop-types'

class ShoppingList extends React.Component {

	componentDidMount() {
		this.props.getItems()
	}

	handleDeleteClick = (id) => {
		this.props.deleteItem(id)
	}

	handleUpdateClick = (id) => {
		this.props.updateItem(id)
	}

	render() {
		const { items } = this.props.item
		const listItem = items.map((li) => {
			return <li key={li._id}>
				<ButtonList
					text='Delete'
					click={this.handleDeleteClick.bind(this, li._id)} />

					<ButtonList
						text='Edit'
						btnBgType='edit'
						click={this.handleDeleteClick.bind(this, li._id)} />

				{li.text}</li>
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
	addItem,
	updateItem
})(ShoppingList)
