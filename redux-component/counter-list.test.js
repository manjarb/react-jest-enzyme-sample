import React from 'react'
import { shallow } from 'enzyme'
import { CounterList } from './counter-list'
import { CREATE_COUNTER } from './store'

describe('CounterList', () => {
  it('renders the right amount of counters', () => {
    const props = {
      dispatch: jest.fn(),
      counterIds: ['id1', 'id2'],
    }

    const wrapper = shallow(<CounterList {...props} />)
    expect(wrapper.find('Connect(Counter)').length).toEqual(2)
  })

  it('lets the user add more counters', () => {
    const props = {
      dispatch: jest.fn(),
      counterIds: ['id1', 'id2'],
    }

    const wrapper = shallow(<CounterList {...props} />)
    wrapper.find('button').simulate('click')
    expect(props.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: CREATE_COUNTER,
        id: expect.any(String),
      })
    )
  })
})
