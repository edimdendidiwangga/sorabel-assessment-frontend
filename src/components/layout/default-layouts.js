import React from 'react';
import Header from './header';
import { Container } from 'semantic-ui-react'
// import Footer from '../components/Footer/';

class DefaultLayouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Container>
        <Header />
        { children }
      </Container>
    );
  }
}

export default DefaultLayouts;
