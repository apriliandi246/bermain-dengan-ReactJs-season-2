import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
   getBadgeClasses = () => {
      let classes = "badge m-3 badge-";
      return classes += (this.props.counter.value === 0) ? "warning" : "primary";
   }

   formatCount = () => {
      const { value: count } = this.props.counter;
      return count === 0 ? 'zero' : count;
   }

   render() {
      const { counter, onIncrement, onDecrement, onDelete } = this.props;

      return (
         <div>
            <span className={this.getBadgeClasses()} style={{ fontSize: 18 }}>{this.formatCount()}</span>
            <button className="btn btn-secondary mr-4" onClick={() => onIncrement(counter)}>Increment</button>
            <button className="btn btn-success" disabled={counter.value === 0 ? true : false} onClick={() => onDecrement(counter)}>Decrement</button>
            <button className="btn btn-danger m-3" onClick={() => onDelete(counter.id)}>Delete</button>
         </div>
      );
   }
}

Counter.propTypes = {
   counter: PropTypes.object.isRequired,
   onDelete: PropTypes.func.isRequired,
   onIncrement: PropTypes.func.isRequired,
   onDecrement: PropTypes.func.isRequired
}

export default Counter;