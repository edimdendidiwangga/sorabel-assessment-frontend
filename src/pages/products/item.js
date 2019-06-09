import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ConfirmDelete from './confirm'

class CardExampleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.toDetail = this.toDetail.bind(this);
  }

  toDetail() {
    this.props.history.push(`/detail/${123}`);
  }

  render() {
    return (
      <Card fluid className="product-item">
        <Image onClick={this.toDetail} src='https://imager-next.freetls.fastly.net/images/resized/480/a8b632a3-ef83-46a8-a9b1-58d7b5f86e1c' wrapped ui={false} />
        <Card.Content onClick={this.toDetail}>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Rp 200.000</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
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