import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleHeader = () => (
  <Dropdown text='Filter' icon='filter' direction="right" labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by category' />
      <Dropdown.Item>Semua Barang</Dropdown.Item>
      <Dropdown.Item>Maxi Dress</Dropdown.Item>
      <Dropdown.Item>Midi Dress</Dropdown.Item>
      <Dropdown.Item>Mini Dress</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleHeader
