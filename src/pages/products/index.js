import React from 'react'
import { Container, Grid, Segment, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
// components
import ProductItem from './item'
import BtnSort from '../../components/btn-sort'
import BtnFilter from '../../components/btn-filter'
import './styles.css';

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { history, products } = this.props;
    console.log('props', this.props)
    return (
      <div className="list-products">
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
              products && products.map((p, idx) => {
                return (
                  <Grid.Column key={idx}>
                    <ProductItem history={history} item={p} />
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
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products', limit: 10, orderBy: ['createdAt', 'desc'] },
  ])
)(ListProduct)