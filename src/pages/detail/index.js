import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Loading from '../../components/loading'
import MyImage from '../../components/my-image'
import { ReadAbleText, RupiahFormat } from '../../helper'
import './styles.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { product } = this.props
    if (!product) return <Loading />
    return (
      <div className="detail-product">
        <Card fluid>
          <MyImage src={product.img_url} className="img-product-detail" />
          <Card.Content>
            <Card.Header>{ReadAbleText(product.name)}</Card.Header>
            <Card.Meta>
              <span className='date'>Rp {RupiahFormat(product.price)}</span>
            </Card.Meta>
            <Card.Description>
              {product.description}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  const products = state.firestore.data.products
  return {
    product: products ? products[id] : null,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products' },
  ])
)(ProductDetail)
