import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onDecrement, onIncrement } from './counterActions';
import { selectCounterValueById } from './counterSelector';

class Counter extends Component {
  render() {
    const { onDecrement, onIncrement, id, value } = this.props;

    return (
      <div>
        <button onClick={() => onDecrement(id)}>-</button>
        <span>{value}</span>
        <button onClick={() => onIncrement(id)}>+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  id: PropTypes.string.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    value: selectCounterValueById(state, props.id)
  }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators({ onDecrement, onIncrement }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
