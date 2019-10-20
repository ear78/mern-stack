import React from 'react'
import styles from './EditModal.module.css'

/* Assets */
import earLogo from '../../../assets/images/ear-logo.svg'

/* Components */
import Button from '../Button/Button'
import InputSubmit from '../InputSubmit/InputSubmit'
import CloseBtn from '../CloseBtn/CloseBtn'
import BrandLogo from '../BrandLogo/BrandLogo'
import Form from '../Form/Form'

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
          <CloseBtn
            click={this.props.onClose} />

          <Form
            submit={this.handleSubmit}>
            <InputSubmit
              inputValue={this.state.text}
              inputChange={this.handleChange.bind(this)} >Edit Field</InputSubmit>
          </Form>
          <BrandLogo />
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
