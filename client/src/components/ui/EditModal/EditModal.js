import React from 'react'
import styles from './EditModal.module.css'

/* Components */
import Button from '../Button/Button'
import InputSubmit from '../InputSubmit/InputSubmit'

/* Redux */
import { connect } from 'react-redux'
import { getItems, updateItem } from '../../../actions/itemActions'

class EditModal extends React.Component {
  state = {
    text: '',
    id: ''
  }

  /* Watch for prop changes from parent component */
  componentDidUpdate(prevProps) {
    if(this.props.modalVal !== prevProps.modalVal && this.props.modalID !== prevProps.modalID) {
      this.setState((prevState) => ({
        id: this.props.modalID,
        text: this.props.modalVal
      }))
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const id = this.state.id
    const updatedItem = {
      text: this.state.text
    }

    this.props.updateItem(id, updatedItem)

    this.props.onClose()
  }

  render(){
    const active = !this.props.show ? '' : styles.active

    return (
      <div className={`${styles.ModalBackground} ${active}`}>
        <div className={styles.Modal}>
          <span className={styles.Close} onClick={this.props.onClose}>&times;</span>
          <form onSubmit={this.handleSubmit}>
            <InputSubmit
              inputValue={this.state.text}
              inputChange={this.handleChange.bind(this)} >Edit Field</InputSubmit>
            {/*<label>
              Edit Field
              <input
                type="text"
                value={this.state.text}
                onChange={this.handleChange.bind(this)}
                />
            </label>*/}
            {/*<Button
              btnType="submit"
              btnSize="small"
              text="Submit" >Submit</Button>*/}
          </form>
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
  updateItem
})(EditModal)
