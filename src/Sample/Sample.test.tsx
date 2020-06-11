import { shallow } from 'enzyme'
import React from 'react'
import Sample from './Sample'

describe('sandbox', () => {
  test('sandbox', () => {
    const wrapper = shallow(
      <Sample>
        <span>success?</span>
      </Sample>
    )
    expect(wrapper.text()).toContain('success?')
  })
})
