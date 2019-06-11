import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const loading = () => (
  <Dimmer active>
    <Loader size='massive'>Loading</Loader>
  </Dimmer>
)

export default loading