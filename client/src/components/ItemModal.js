import React from 'react'

import { connect } from 'react-redux'
import { getItems, addItem } from '../actions/itemActions'

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

		const modalStyle = {
			width: '70%',
			minHeight: '200px',
			position: 'absolute',
			padding: '10% 2.5%',
			top: '10%',
			left: '15%',
			background: '#fff',
			borderRadius: '3px',
			boxShadow: '0 2px 15px rgba(0,0,0,.15)',
			boxSizing: 'border-box',
			display: isModalActive
		}

		const modalBg = {
			height: '100%',
			width: '100%',
			background: 'rgba(0,0,0,.7)',
			position: 'fixed',
			top: '0',
			left: '0',
			display: isModalActive
		}
		return (
			<div>
				<button onClick={this.toggle}>Add Item</button>
				<div style={modalBg}>
					<div style={modalStyle}>
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
							<button type="submit" value="Submit">Submit</button>
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
