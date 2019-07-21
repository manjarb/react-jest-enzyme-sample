import React from 'react'
import Form from './form'
import { shallow } from 'enzyme'
import * as api from './api'

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector)
  input.simulate('change', {
    target: { value: newValue },
  })
  return wrapper.find(inputSelector)
}

describe('Form', () => {
  beforeEach(() => jest.resetAllMocks())
  it('has a default colour of blue selected', () => {
    const wrapper = shallow(<Form />)
    const colorSelect = wrapper.find('select')
    expect(colorSelect.props().value).toEqual('blue')
  })

  it('lets me fill out the form with values', () => {
    const wrapper = shallow(<Form />)
    const nameInput = simulateChangeOnInput(wrapper, '#name-input', 'Jack')
    const emailInput = simulateChangeOnInput(
      wrapper,
      '#email-input',
      'jack@test.com'
    )
    const colourInput = simulateChangeOnInput(
      wrapper,
      '#colour-input',
      'yellow'
    )
    expect(nameInput.props().value).toEqual('Jack')
    expect(emailInput.props().value).toEqual('jack@test.com')
    expect(colourInput.props().value).toEqual('yellow')
  })

  // it('lets me click the reset button to clear the form', () => {
  //   const wrapper = shallow(<Form />)
  //   const nameInput = simulateChangeOnInput(wrapper, '#name-input', 'Jack')
  //   const emailInput = simulateChangeOnInput(
  //     wrapper,
  //     '#email-input',
  //     'jack@test.com'
  //   )
  //   const colourInput = simulateChangeOnInput(
  //     wrapper,
  //     '#colour-input',
  //     'yellow'
  //   )
  //   const resetBtn = wrapper.find('button[type="button"]')
  //   resetBtn.simulate('click')
  //   expect(wrapper.find('#name-input').props().value).toEqual('')
  //   expect(wrapper.find('#email-input').props().value).toEqual('')
  //   expect(wrapper.find('#colour-input').props().value).toEqual('blue')
  // })

  // it('submits the form to the API', () => {
  //   jest
  //     .spyOn(api, 'saveUser')
  //     .mockImplementation(() => Promise.resolve({ message: 'Saved user!' }))

  //   const wrapper = shallow(<Form />)
  //   const nameInput = simulateChangeOnInput(wrapper, '#name-input', 'Jack')
  //   const emailInput = simulateChangeOnInput(
  //     wrapper,
  //     '#email-input',
  //     'jack@test.com'
  //   )
  //   const colourInput = simulateChangeOnInput(
  //     wrapper,
  //     '#colour-input',
  //     'yellow'
  //   )
  //   wrapper.find('form').simulate('submit', {
  //     preventDefault: () => {},
  //   })
  //   expect(api.saveUser).toHaveBeenCalledWith('Jack', 'jack@test.com', 'yellow')
  // })
})
