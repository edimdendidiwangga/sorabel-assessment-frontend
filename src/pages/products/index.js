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
    const { history } = this.props;
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
            <Grid.Row columns={2}>
              <Grid.Column>
                <ProductItem history={history} />
              </Grid.Column>
              <Grid.Column>
                <ProductItem history={history} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <ProductItem history={history} />
              </Grid.Column>
              <Grid.Column>
                <ProductItem history={history} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products', limit: 3, orderBy: ['createdAt', 'desc']},
  ])
)(ListProduct)