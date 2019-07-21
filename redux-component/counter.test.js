import React from 'react'
import { Counter } from './counter'
import { shallow } from 'enzyme'
import { counterIncrement, counterDecrement } from './store'

describe('Counter component', () => {
  it('renders the count', () => {
    const props = {
      dispatch: jest.fn(),
      count: 3,
      id: 'randomid',
    }

    const wrapper = shallow(<Counter {...props} />)
    expect(wrapper.find('p').text()).toEqual('Current count: 3')
  })

  it('dispatches the right action for incrementing', () => {
    const props = {
      dispatch: jest.fn(),
      count: 3,
      id: 'randomid',
    }

    const wrapper = shallow(<Counter {...props} />)
    wrapper.find('button.increment').simulate('click')

    expect(props.dispatch).toHaveBeenCalledWith(counterIncrement(props.id))
  })

  it('dispatches the right action for decrementing', () => {
    const props = {
      dispatch: jest.fn(),
      count: 3,
      id: 'randomid',
    }

    const wrapper = shallow(<Counter {...props} />)
    wrapper.find('button.decrement').simulate('click')

    expect(props.dispatch).toHaveBeenCalledWith(counterDecrement(props.id))
  })
})
