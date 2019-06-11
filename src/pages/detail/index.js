import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Lightbox from 'react-image-lightbox';
import Loading from '../../components/loading'
import MyImage from '../../components/my-image'
import { ReadAbleText, RupiahFormat } from '../../helper'

import 'react-image-lightbox/style.css'; 
import './styles.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.previewImage = this.previewImage.bind(this)
  }

  previewImage() {
    const { open } = this.state;
    this.setState({ open: !open })
  }

  render() {
    const { open } = this.state;
    const { product } = this.props;
    if (!product) return <Loading />
    if (open) return <Lightbox mainSrc={product.img_url} onCloseRequest={() => this.setState({ open: false })} />
    return (
      <div className="detail-product">
        <Card fluid>
          <MyImage src={product.img_url} className="img-product-detail" onClick={this.previewImage} />
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
