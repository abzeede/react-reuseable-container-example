export const COUNTER = {
  INCREMENT: 'COUNTER_INCREMENT',
  DECREMENT: 'COUNTER_DECREMENT',
};

export const onIncrement = (id = 0) => (dispatch) => {
  dispatch({
    type: COUNTER.INCREMENT,
    payload: {
      id
    }
  })
};

export const onDecrement = (id = 0) => (dispatch) => {
  dispatch({
    type: COUNTER.DECREMENT,
    payload: {
      id
    }
  })
};
