import React from 'react'
import { Container, Grid, Segment, Header, Input } from 'semantic-ui-react'
import ProductItem from './item'
import BtnSort from './btn-sort'
import BtnFilter from './btn-filter'
import './styles.css';

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { history } = this.props;
    return (
      <div className="list-products">
        <Container>
          <Grid centered>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Segment className="search-sort-filter">
                  <div className="section-search">
                    <Input icon='search' fluid placeholder='Search...' />
                  </div>
                  <div className="section-filter">
                    <BtnFilter />
                    <BtnSort />
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

export default ListProduct