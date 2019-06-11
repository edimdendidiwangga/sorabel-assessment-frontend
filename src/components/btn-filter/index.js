import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { filterProducts } from '../../store/actions/products'

class FilterProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { text: 'Semua Barang', value: 0 },
        { text: 'Mini Dress', value: 1 },
        { text: 'Midi Dress', value: 2 },
        { text: 'Maxi Dress', value: 3 },
      ],
    };
  }

  handleFilter(type) {
    this.props.filterProducts(type)
  }

  render() {
    const { options } = this.state;
    return (
      <Dropdown
        text='Filter'
        icon='filter'
        direction="right"
        button
        className='icon'
        labeled
        options={options}
        onChange={(e, data) => this.handleFilter(data.value)} />
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
    filterProducts: param => dispatch(filterProducts(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterProducts)
