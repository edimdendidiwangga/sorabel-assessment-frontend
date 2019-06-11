import React from 'react'
import { Card } from 'semantic-ui-react'
import ConfirmDelete from './confirm'
import MyImage from '../../components/my-image'
import { ReadAbleText, RupiahFormat } from '../../helper'

class CardExampleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.toDetail = this.toDetail.bind(this);
  }

  toDetail() {
    const { item, history } = this.props
    history.push(`/detail/${item.id}`);
  }

  render() {
    const { item } = this.props
    return (
      <Card fluid className="product-item">
        <MyImage onClick={this.toDetail} src={item.img_url} className="img-product" />
        <Card.Content onClick={this.toDetail}>
          <Card.Header>{ReadAbleText(item.name)}</Card.Header>
          <Card.Meta>
            <span className='date'>Rp {RupiahFormat(item.price)}</span>
          </Card.Meta>
          <Card.Description>
            {item.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <ConfirmDelete />
        </Card.Content>
      </Card>
    )
  }
}

export default CardExampleCard