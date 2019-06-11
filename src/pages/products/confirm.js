import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { openOrCloseModal } from '../../store/actions/products'

class ModalConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openOrClose = () => {
    const { openOrCloseModal, openModal } = this.props
    openOrCloseModal(!openModal.isOpen, null)
  }

  render() {
    const { openModal, confirmAction } = this.props
    return (
      <Modal
        open={openModal.isOpen}
        size="mini">
        <Header icon='archive' content='Delete Product' />
        <Modal.Content>
          <p>
            Are you sure delete this product?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.openOrClose}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' onClick={() => confirmAction()}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    openModal: state.openModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openOrCloseModal: (isOpen, id) => dispatch(openOrCloseModal(isOpen, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirm)
