import React from 'react';
import Header from './header';
import './styles.css';
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
      <div className="container-content">
        <Header />
        { children }
      </div>
    );
  }
}

export default DefaultLayouts;
