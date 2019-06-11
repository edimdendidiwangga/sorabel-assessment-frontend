import React from 'react'
import { Container, Grid, Segment, Input, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import _ from 'underscore';
// components
import ProductItem from './item'
import BtnSort from '../../components/btn-sort'
import BtnFilter from '../../components/btn-filter'
import Loading from '../../components/loading'
import ConfirmDelete from './confirm'
import { removeProduct, openOrCloseModal, searchProducts } from '../../store/actions/products'

import './styles.css';

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingSearch: false
    };
    this.timeout = null;
  }

  removeProductItem (id) {
    const { removeProduct, openModal, openOrCloseModal } = this.props
    removeProduct(openModal.id, (isSuccess) => {
      if (isSuccess) {
        openOrCloseModal(!openModal.isOpen, null)
      }
    })
  }

  handleData() {
    let { manage, products } = this.props;
    if (products) {
      if (manage.category) {
        if (manage.sort[0] === "createdAt") {
          return _.sortBy(products, 'createdAt').reverse();
        }
        if (manage.sort[0] === "price" && manage.sort[1] === "asc") {
          return _.sortBy(products, 'price');
        }
        if (manage.sort[0] === "price" && manage.sort[1] === "desc") {
          return _.sortBy(products, 'price').reverse();
        }
        return products
      }
      return products
    }
    return []
  }

  handleSearch(e) {
    const { value } = e.target
    this.setState({ loadingSearch: true })
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ loadingSearch: false })
      this.props.searchProducts(value)
    }, 2000);
  }

  render() {
    const { loadingSearch } = this.state;
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
                    <Input
                      icon='search'
                      fluid
                      placeholder='Search...'
                      onChange={e => this.handleSearch(e)} />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            {
              loadingSearch && 
              <Segment className="search-sort-filter">
                <Dimmer active inverted>
                  <Loader active inline='centered' />
                </Dimmer>
              </Segment>
                 
            }
            {
              !loadingSearch && this.handleData().map((item, idx) => {
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
    manage: state.manage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: (param, cb) => dispatch(removeProduct(param, cb)),
    openOrCloseModal: (isOpen, id) => dispatch(openOrCloseModal(isOpen, id)),
    searchProducts: params => dispatch(searchProducts(params))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    const { search, category, limit, sort } = props.manage;
    let orderBy = sort;
    if (category) { orderBy = null }
    if (search) { orderBy = 'name' }
    return [
      {
        collection: 'products',
        where: [
          category && !search ? ["category", "==", Number(category)] : [],
        ],
        orderBy,
        limit,
        startAt: search || null,
        endAt: search ? `${search}\uf8ff` : null
      },
    ]
  })
)(ListProduct)