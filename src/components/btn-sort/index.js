import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { sortProducts } from '../../store/actions/products'

class SortProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { text: 'Terbaru', value: 'newest' },
        { text: 'Harga Termahal', value: 'expensive' },
        { text: 'Harga Termurah', value: 'cheapest' },
      ],
    };
  }

  handleSort(type) {
    this.props.sortProducts(type)
  }

  render() {
    const { options } = this.state
    return (
      <Dropdown
        text='Sort'
        icon='sort'
        direction="right"
        labeled
        button
        className='icon'
        options={options}
        onChange={(e, data) => this.handleSort(data.value)} />
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
