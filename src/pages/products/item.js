import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux'
import MyImage from '../../components/my-image'
import { ReadAbleText, RupiahFormat } from '../../helper'
import { openOrCloseModal } from '../../store/actions/products'

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.toDetail = this.toDetail.bind(this);
    this.openOrClose = this.openOrClose.bind(this);
  }

  toDetail() {
    const { item, history } = this.props
    history.push(`/detail/${item.id}`);
  }

  openOrClose() {
    const { openOrCloseModal, openModal, item } = this.props
    openOrCloseModal(!openModal.isOpen, item.id)
  }

  render() {
    const { item } = this.props
    const productName = item.name
    return (
      <Card fluid className="product-item">
        <div onClick={this.toDetail}>
          <MyImage src={item.img_url} className="img-product" />
        </div>
        <Card.Content onClick={this.toDetail}>
          <Card.Header size="tiny">{ReadAbleText(productName)}</Card.Header>
          <Card.Meta>
            <span className='date'>Rp {RupiahFormat(item.price)}</span>
          </Card.Meta>
          <Card.Description>
            {
              item.description
            }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link onClick={this.openOrClose}>
            <Icon name='trash' /> Delete
          </Link>
        </Card.Content>
      </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)