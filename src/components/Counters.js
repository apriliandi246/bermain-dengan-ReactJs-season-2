import React, { Component } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

class Counters extends Component {
   handleDisableButton = () => {
      const data = this.props.counters;
      const count = this.props.counters.filter(c => c.value > 0).length;
      return count === 0 || data.length === 0 ? true : false;
   }

   render() {
      const { total, counters, onReset, onDelete, addEntry, onIncrement, onDecrement } = this.props;

      return (
         <div>
            <h1 className="m-3 text-monospace font-weight-bold">Total :  <span>{total}</span></h1>
            <button className="button btn btn-primary btn-sm m-3" disabled={this.handleDisableButton()} onClick={onReset}>Reset</button>
            <button className="button btn btn-success btn-sm m-3" onClick={addEntry}>Add Entry</button>

            {
               counters.map((counter) =>
                  <Counter
                     key={counter.id}
                     counter={counter}
                     onDelete={onDelete}
                     onIncrement={onIncrement}
                     onDecrement={onDecrement}
                  />
               )
            }
         </div>
      );
   }
}

Counters.propTypes = {
   total: PropTypes.number.isRequired,
   counters: PropTypes.array.isRequired,
   onReset: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
   addEntry: PropTypes.func.isRequired,
   onIncrement: PropTypes.func.isRequired
}

export default Counters;