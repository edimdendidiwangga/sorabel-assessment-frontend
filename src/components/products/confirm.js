import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalExampleCloseIcon = () => (
  <Modal size="mini" trigger={<a><Icon name='trash' /> Delete</a>} closeIcon>
    <Header icon='archive' content='Delete Product' />
    <Modal.Content>
      <p>
        Are you sure delete this product?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalExampleCloseIcon
