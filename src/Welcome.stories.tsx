import React from 'react'
import { linkTo } from '@storybook/addon-links'
import { Button } from '@storybook/react/demo'

export default {
  title: 'Welcome',
}

export const ToStorybook = (): React.ReactElement => (
  <Button onClick={linkTo('Sample')}>to Sample</Button>
)

ToStorybook.story = {
  name: 'to Storybook',
}
