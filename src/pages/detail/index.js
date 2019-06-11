import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './styles.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { product } = this.props
    console.log('product', product)
    return (
      <div className="detail-product">
        <Card fluid>
          <Image src='https://imager-next.freetls.fastly.net/images/resized/480/a8b632a3-ef83-46a8-a9b1-58d7b5f86e1c' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Rp 200.000</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
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
    { collection: 'products', limit: 10, orderBy: ['createdAt', 'desc'] },
  ])
)(ProductDetail)
