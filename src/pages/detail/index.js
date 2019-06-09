import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './styles.css';

const CardExampleCard = () => (
  <div className="detail-product">
    <Card fluid>
      <Image src='https://imager-next.freetls.fastly.net/images/resized/480/a8b632a3-ef83-46a8-a9b1-58d7b5f86e1c' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Rp 200.000</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
)

export default CardExampleCard
