import React from 'react'
import { Container, Grid, Segment, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import _ from 'underscore';
import InfiniteScroll from 'react-infinite-scroller';
// components
import ProductItem from './item'
import BtnSort from '../../components/btn-sort'
import BtnFilter from '../../components/btn-filter'
import Loading from '../../components/loading'
import LoadingMini from '../../components/loading-mini'
import ConfirmDelete from './confirm'
import { removeProduct, openOrCloseModal, searchProducts, getMoreProducts } from '../../store/actions/products'

import './styles.css';

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingSearch: false,
      tempProducts: [],
    };
    this.timeout = null;
    this.loadMore = this.loadMore.bind(this);
    this.loadMoreProducts = false;
  }

  loadMore() {
    const { products, getMoreProducts } = this.props;
    if (!this.loadMoreProducts) {
      this.loadMoreProducts = true
      if (products.length % 5 === 0) {
        getMoreProducts()
        setTimeout(() => {
          this.loadMoreProducts = false
        }, 2000);
      } else {
        setTimeout(() => {
          this.loadMoreProducts = false
        }, 2000);
      }
    }
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
      if (manage.search && products.length < 1) {
        return this.state.tempProducts.filter((data) => {
          const textSearch = manage.search.split(' ').map(word => `${word}`).join('|');
          const regex = new RegExp(textSearch, 'gi');
          return regex.test(data.name);
        });
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
      this.setState({ loadingSearch: false , tempProducts: this.props.products }, () => {
        this.props.searchProducts(value)
      })
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
              loadingSearch && !this.loadMoreProducts && <LoadingMini />
            }
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadMore}
              hasMore={products.length % 5 === 0}
              loader={<LoadingMini />}>
              {
                this.handleData().map((item, i) => {
                  return (
                    <ProductItem
                      key={i}
                      history={history}
                      item={item} />
                  );
                })
              }
            </InfiniteScroll>
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
    searchProducts: params => dispatch(searchProducts(params)),
    getMoreProducts: () => dispatch(getMoreProducts()),
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