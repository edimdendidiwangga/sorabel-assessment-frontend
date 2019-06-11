import React from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

const LoadingMini = () => (
  <Segment className="search-sort-filter">
    <Dimmer active inverted>
      <Loader active inline='centered' />
    </Dimmer>
  </Segment>
)

export default LoadingMini;
