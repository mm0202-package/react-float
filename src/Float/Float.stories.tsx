import React from 'react'
import { Fab } from '@material-ui/core'
import * as faker from 'faker'
import Float from './Float'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Float',
}

export const float = (): React.ReactElement => (
  <>
    <div>{faker.random.words(1000)}</div>
    <Float top={'20px'} left={'40px'}>
      <Fab onClick={() => action('click')('top-left')}>TL</Fab>
    </Float>
    <Float top={'2rem'} right={'4rem'}>
      <Fab onClick={() => action('click')('top-right')}>TR</Fab>
    </Float>
    <Float bottom={'4vw'} left={'8vw'}>
      <Fab onClick={() => action('click')('bottom-left')}>BL</Fab>
    </Float>
    <Float bottom={'4vh'} right={'8vh'}>
      <Fab onClick={() => action('click')('bottom-right')}>BR</Fab>
    </Float>
  </>
)
