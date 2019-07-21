import React, { Component } from 'react'
import { connect } from 'react-redux'
import { counterIncrement, counterDecrement } from './store'

export class Counter extends Component {
  increment = () => {
    this.props.dispatch(counterIncrement(this.props.id))
  }
  decrement = () => {
    this.props.dispatch(counterDecrement(this.props.id))
  }

  render() {
    return (
      <div>
        <p>Current count: {this.props.count}</p>
        <button className="increment" onClick={this.increment}>
          +++
        </button>
        <button className="decrement" onClick={this.decrement}>
          ---
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  count: state[props.id],
})

export default connect(mapStateToProps)(Counter)
