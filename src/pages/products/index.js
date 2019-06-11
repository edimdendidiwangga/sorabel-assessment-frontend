import React from 'react'
import { Container, Grid, Segment, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
// components
import ProductItem from './item'
import BtnSort from '../../components/btn-sort'
import BtnFilter from '../../components/btn-filter'
import Loading from '../../components/loading'
import ConfirmDelete from './confirm'
import { removeProduct, openOrCloseModal } from '../../store/actions/products'

import './styles.css';

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  removeProductItem (id) {
    const { removeProduct, openModal, openOrCloseModal } = this.props
    removeProduct(openModal.id, (isSuccess) => {
      if (isSuccess) {

        openOrCloseModal(!openModal.isOpen, null)
      }
    })
  }

  render() {
    const { history, products } = this.props;
    if (!products) return <Loading />
    return (
      <div className="list-products">
        <ConfirmDelete
          confirmAction={() => this.removeProductItem()} />
        <Container>
          <Grid centered>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Segment className="search-sort-filter">
                  <div className="section-filter">
                    <BtnFilter />
                    <BtnSort />
                  </div>
                  <div className="section-search">
                    <Input icon='search' fluid placeholder='Search...' />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            {
              products && products.map((item, idx) => {
                return (
                  <Grid.Column key={idx}>
                    <ProductItem
                      history={history}
                      item={item} />
                  </Grid.Column>
                );
              }).reduce((r, element, index) => {
                index % 2 === 0 && r.push([]);
                r[r.length - 1].push(element);
                return r;
              }, []).map((rowContent, i) => {
                return (
                  <Grid.Row columns={2} key={i}>{rowContent}</Grid.Row>
                );
              })
            }
            {/* <Grid.Row columns={2}>
              <Grid.Column>
                <ProductItem history={history} />
              </Grid.Column>
              <Grid.Column>
                <ProductItem history={history} />
              </Grid.Column>
            </Grid.Row> */}
          </Grid>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
    deleteProduct: state.deleteProduct,
    openModal: state.openModal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: (param, cb) => dispatch(removeProduct(param, cb)),
    openOrCloseModal: (isOpen, id) => dispatch(openOrCloseModal(isOpen, id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'products', limit: 10, orderBy: ['createdAt', 'desc'] },
  ])
)(ListProduct)