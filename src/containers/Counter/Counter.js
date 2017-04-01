import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onDecrement, onIncrement } from './counterActions';

class Counter extends Component {
  render() {
    const { onDecrement, onIncrement, id } = this.props;

    return (
      <div>
        <button onClick={() => onDecrement(id)}>-</button>
        <span>1</span>
        <button onClick={() => onIncrement(id)}>+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  id: PropTypes.string.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators({ onDecrement, onIncrement }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
