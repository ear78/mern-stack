import React from 'react'
import styles from './ShoppingList.module.css'

/* Assets */
import deleteIcon from '../assets/images/delete-icon.svg'
import editIcon from '../assets/images/edit-icon.svg'

/* Components */
import ButtonList from './ui/ButtonList/ButtonList'
import ItemModal from './ItemModal/ItemModal'
import EditModal from './ui/EditModal/EditModal'

/* Redux */
import { connect } from 'react-redux'
import { getItems, deleteItem, addItem, updateItem } from '../actions/itemActions'

/* PropTypes */
import Proptypes from 'prop-types'

class ShoppingList extends React.Component {
	state = {
		isOpen: false,
		modalValues: {
			id: '',
			text: ''
		}
	}
	componentDidMount() {
		this.props.getItems()
	}

	handleDeleteClick = (id) => {
		this.props.deleteItem(id)
	}

	handleUpdateClick = (id) => {
		this.props.updateItem(id)
	}

	toggleModal = (id) => {
		let obj = this.props.item.items.find((obj) => {
      return obj._id === id
    })
		if(!this.state.isOpen) {
			this.setState(prevState => ({
				isOpen: !prevState.isOpen,
				modalValues: {
					text: obj.text,
					id: obj._id
				}
			}))
		}
		else {
			this.setState({
				isOpen: !this.state.isOpen,
				modalValue: ''
			})
		}
	}

	render() {
		const { items } = this.props.item
		const listItem = items.map((li) => {
			return (
				<li key={li._id} className={styles.ListItem}>
					<span>{li.text}</span>
					<span>
						<ButtonList
							alt="edit Icon"
							click={this.toggleModal.bind(this, li._id)}
							src={editIcon} />
						<ButtonList
							alt="delete icon"
							click={this.handleDeleteClick.bind(this, li._id)}
							src={deleteIcon} />
					</span>
				</li>
			)
		})
		return (
			<div className={styles.ShoppingList}>
				<ItemModal setAddItem={true} />
				
				<EditModal
					modalVal={this.state.modalValues.text}
					modalID={this.state.modalValues.id}
					onClose={this.toggleModal}
					show={this.state.isOpen} />

				<div className={styles.List}>
					{listItem}
				</div>
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
