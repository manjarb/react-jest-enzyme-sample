import React from 'react'
import { shallow, mount } from 'enzyme'
import CounterList from './counter-list'

describe('CounterList', () => {
  it('should render two counters by default', () => {
    const wrapper = shallow(<CounterList />)
    const counters = wrapper.find('Counter')
    expect(counters.length).toEqual(2)
  })

  it('can add more counters when we click the button', () => {
    // const wrapper = shallow(<CounterList />)
    // const btn = wrapper.find('button')
    // btn.simulate('click')
    // const counters = wrapper.find('Counter')
    // expect(counters.length).toEqual(3)
    const wrapper = shallow(<CounterList />)
    const btn = wrapper.find('button')
    btn.simulate('click')
    const counters = wrapper.find('Counter')
    expect(counters.length).toEqual(3)
  })
})
