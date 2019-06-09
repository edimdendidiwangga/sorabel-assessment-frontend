import React, { Fragment } from 'react'
import { Responsive, Dropdown } from 'semantic-ui-react'

const DropdownSort = () => (
  <Fragment>
    <Responsive minWidth={481}>
      <Dropdown text='Sort' icon='sort' direction="right" labeled button className='icon'>
        <Dropdown.Menu>
          <Dropdown.Item>Terbaru</Dropdown.Item>
          <Dropdown.Item>Harga Termahal</Dropdown.Item>
          <Dropdown.Item>Harga Termurah</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Responsive>
    <Responsive minWidth={320} maxWidth={480}>
      <Dropdown icon='sort' direction="right" button className='icon'>
        <Dropdown.Menu>
          <Dropdown.Item>Terbaru</Dropdown.Item>
          <Dropdown.Item>Harga Termahal</Dropdown.Item>
          <Dropdown.Item>Harga Termurah</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Responsive>
  </Fragment>
)

export default DropdownSort
