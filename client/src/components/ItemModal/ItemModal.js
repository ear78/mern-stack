import React from 'react'
import styles from './ItemModal.module.css'

import addIcon from '../../assets/images/add-icon.svg'

/* Components */
import InputSubmit from '../ui/InputSubmit/InputSubmit'
import Button from '../ui/Button/Button'
import CloseBtn from '../ui/CloseBtn/CloseBtn'
import BrandLogo from '../ui/BrandLogo/BrandLogo'
import Form from '../ui/Form/Form'

/* Redux */
import { connect } from 'react-redux'
import { getItems, addItem } from '../../actions/itemActions'

class ItemModal extends React.Component {
	state = {
		modal: false,
		name: ''
	}

	toggle = () => {
		this.setState(	prevState => ({
			modal: !prevState.modal,
			name: ''
		}))
	}

	handleChange = (event) => {
		this.setState({ name: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const { items } = this.props.item
		const newItem = {
			text: this.state.name
		}

		this.props.addItem(newItem)

		this.toggle()
	}

	render() {
		const isModalActive = this.state.modal ? 'block' : 'none'
		const isAddItem = this.props.setAddItem

		const active = this.state.modal ? styles.active : ''

		return (
			<div>
				<Button
					btnType="text"
					btnColor=""
					btnWidth='fullWidth'
					click={this.toggle.bind(this)} >
						<img className={styles.AddIcon} src={addIcon} alt="add icon" />
					</Button>

				<div className={`${styles.ModalBg} ${active}`} >
					<div className={styles.ModalStyle} >
						<CloseBtn click={this.toggle} />
						<Form submit={this.handleSubmit}>
							<InputSubmit
								placeHolderText="Get Stuff Done!"
								inputValue={this.state.name}
								inputChange={this.handleChange}>Add Item</InputSubmit>
						</Form>
						<BrandLogo />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	item: state.item
})

export default connect(mapStateToProps, {
	getItems,
	addItem
})(ItemModal)
