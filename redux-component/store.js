import { createStore } from 'redux'

export const CREATE_COUNTER = 'CREATE_COUNTER'
export const createCounter = id => ({
  type: CREATE_COUNTER,
  id,
})

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

export const counterIncrement = id => ({
  type: COUNTER_INCREMENT,
  id,
})

export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'

export const counterDecrement = id => ({
  type: COUNTER_DECREMENT,
  id,
})

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COUNTER:
      return {
        ...state,
        [action.id]: 0,
      }

    case COUNTER_INCREMENT:
      if (!state.hasOwnProperty(action.id)) {
        return state
      }

      return {
        ...state,
        [action.id]: state[action.id] + 1,
      }
    case COUNTER_DECREMENT:
      if (!state.hasOwnProperty(action.id)) {
        return state
      }

      return {
        ...state,
        [action.id]: state[action.id] - 1,
      }
    default:
      return state
  }
}

export const store = createStore(reducer)
