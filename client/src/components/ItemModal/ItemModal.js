import React from 'react'
import styles from './ItemModal.module.css'

import addIcon from '../../assets/images/add-icon.svg'

/* Components */
import Button from '../ui/Button/Button'

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

		const addIconStyle = {
			verticalAlign: 'sub',
			width: '45px',
			marginLeft: '4px'
		}
		const modalStyle = {
			display: isModalActive
		}

		const modalBg = {
			display: isModalActive
		}

		return (
			<div>
				<Button
					btnType="text"
					btnColor=""
					btnWidth='fullWidth'
					click={this.toggle.bind(this)} >
						<img style={addIconStyle} src={addIcon} alt="add icon" />
				</Button>

				<div className={styles.ModalBg} style={modalBg}>
					<div className={styles.ModalStyle} style={modalStyle}>
					<span onClick={this.toggle}
								style={{
									cursor: 'pointer',
									position: 'absolute',
									top: '15px',
									left: '15px'
								}}>&times;</span>
						<form onSubmit={this.handleSubmit}>
							<label>Please add your name:
								<input type="text"
											 value={this.state.name}
											 onChange={this.handleChange}/>
							</label>
							<Button text="Submit" btnType="submit" btnValue="Submit" />
						</form>
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
