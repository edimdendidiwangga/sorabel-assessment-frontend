import React, { Fragment } from 'react'
import { Responsive, Dropdown } from 'semantic-ui-react'

const DropdownFilter = () => (
  <Fragment>
    <Responsive minWidth={481}>
      <Dropdown text='Filter' icon='filter' direction="right" labeled button className='icon'>
        <Dropdown.Menu>
          <Dropdown.Header icon='tags' content='Filter by category' />
          <Dropdown.Item>Semua Barang</Dropdown.Item>
          <Dropdown.Item>Maxi Dress</Dropdown.Item>
          <Dropdown.Item>Midi Dress</Dropdown.Item>
          <Dropdown.Item>Mini Dress</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Responsive>
    <Responsive minWidth={320} maxWidth={480}>
      <Dropdown icon='filter' direction="right" button className='icon'>
        <Dropdown.Menu>
          <Dropdown.Header icon='tags' content='Filter by category' />
          <Dropdown.Item>Semua Barang</Dropdown.Item>
          <Dropdown.Item>Maxi Dress</Dropdown.Item>
          <Dropdown.Item>Midi Dress</Dropdown.Item>
          <Dropdown.Item>Mini Dress</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Responsive>
  </Fragment>
)

export default DropdownFilter
