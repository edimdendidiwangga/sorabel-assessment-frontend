import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Link from 'react-router-dom/Link';

const ModalExampleCloseIcon = () => (
  <Modal size="mini"
    trigger={
      <Link>
        <Icon name='trash' /> Delete
      </Link>
    }
    closeIcon>
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
