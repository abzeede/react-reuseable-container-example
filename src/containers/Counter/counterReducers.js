import { COUNTER } from './counterActions';

export default (state = {}, action) => {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return Object.assign({}, state, {[action.payload.id]: (state[action.payload.id] || 0) + 1});
    case COUNTER.DECREMENT:
      return Object.assign({}, state, {[action.payload.id]: (state[action.payload.id] || 0) - 1});
    default:
      return state;
  }
}
