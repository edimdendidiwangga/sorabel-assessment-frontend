import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleHeader = () => (
  <Dropdown text='Sort' icon='sort' direction="right" labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Item>Terbaru</Dropdown.Item>
      <Dropdown.Item>Harga Termahal</Dropdown.Item>
      <Dropdown.Item>Harga Termurah</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleHeader
