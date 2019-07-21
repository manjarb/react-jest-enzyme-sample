import CounterList from './counter-list'
import { Provider } from 'react-redux'
import { store } from './store'

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <Provider store={store}>
    <CounterList />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('react-root'))
