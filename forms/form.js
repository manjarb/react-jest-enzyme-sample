import React, { Component } from 'react'

import { saveUser } from './api'

const COLOURS = ['blue', 'red', 'yellow']

const startingState = {
  name: '',
  email: '',
  colour: COLOURS[0],
}

class Form extends Component {
  state = startingState

  reset = () => this.setState(startingState)

  updateField = stateKey => e => {
    this.setState({ [stateKey]: e.target.value })
  }

  submitForm = e => {
    e.preventDefault()
    return saveUser(this.state.name, this.state.email, this.state.colour)
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="group">
          <label>Name</label>
          <input
            type="text"
            id="name-input"
            value={this.state.name}
            onChange={this.updateField('name')}
          />
        </div>

        <div className="group">
          <label>Email</label>
          <input
            type="text"
            id="email-input"
            value={this.state.email}
            onChange={this.updateField('email')}
          />
        </div>

        <div className="group">
          <label>Favourite Colour</label>
          <select
            id="colour-input"
            value={this.state.colour}
            onChange={this.updateField('colour')}
          >
            {COLOURS.map(c => (
              <option key={c} value={c}>
                My fav colour is: {c}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Sign up</button>
        <button type="button" onClick={this.reset}>
          Reset
        </button>
      </form>
    )
  }
}

export default Form
