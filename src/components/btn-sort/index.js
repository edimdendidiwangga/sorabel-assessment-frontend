import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Responsive, Dropdown } from 'semantic-ui-react'
import { sortProducts } from '../../store/actions/products'

class SortProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSort(type) {
    this.props.sortProducts(type)
  }

  render() {
    return (
      <Fragment>
        <Responsive minWidth={481}>
          <Dropdown text='Sort' icon='sort' direction="right" labeled button className='icon'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.handleSort('newest')}>Terbaru</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSort('expensive')}>Harga Termahal</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSort('cheapest')}>Harga Termurah</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
        <Responsive minWidth={320} maxWidth={480}>
          <Dropdown icon='sort' direction="right" button className='icon'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.handleSort('newest')}>Terbaru</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSort('expensive')}>Harga Termahal</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSort('cheapest')}>Harga Termurah</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    manage: state.manage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortProducts: param => dispatch(sortProducts(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortProduct)
