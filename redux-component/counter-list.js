import React, { Component } from 'react'
import Counter from './counter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCounter } from './store'

const randomString = () =>
  Math.random()
    .toString(36)
    .substr(2, 5)

export class CounterList extends Component {
  addCounter = () => this.props.dispatch(createCounter(randomString()))

  renderCounter(id) {
    return (
      <li key={id}>
        <Counter id={id} />
      </li>
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.addCounter}>Add counter</button>
        <ul>{this.props.counterIds.map(id => this.renderCounter(id))}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counterIds: Object.keys(state),
})

export default connect(mapStateToProps)(CounterList)
