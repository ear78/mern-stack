import React from 'react'

import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends React.Component {
	state = {
		modal: false
	}

	render() {
		const isModalActive = this.state.modal ? 'block' : 'none'

		const modalStyle = {
			width: '300px',
			minHeight: '200px',
			position: 'absolute',
			top: '10%',
			left: '10%',
			background: 'rgba(0,0,0,.5)',
			display: isModalActive
		}
		return (
			<div style={modalStyle}>
				I'm a modal
			</div>
		)
	}
}

export default connect()(ItemModal)
