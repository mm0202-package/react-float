import React from 'react'
import { Button } from '@storybook/react/demo'
import Sample from './Sample'

export default {
  title: 'Sample',
  component: Button,
}

export const sample = (): React.ReactElement => <Sample>sample</Sample>
