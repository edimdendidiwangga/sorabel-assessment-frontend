import React, { Component } from 'react'
import { Button, Menu, Header } from 'semantic-ui-react'
import Link from 'react-router-dom/Link';
import './styles.css';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="container-menu-header">
        <Menu secondary className="custom-header">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Link to="/">
              <Header as='h2' color='purple'>
                SORABEL
              </Header>
            </Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Link to="/add">
                <Button color="purple">Tambah</Button>
              </Link>
            </Menu.Item>
            {/* <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            /> */}
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}