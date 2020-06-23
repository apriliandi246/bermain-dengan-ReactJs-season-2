import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   state = {
      total: 0
   }

   render() {
      const { onReset, counters, onDelete, onIncrement, total, addEntry } = this.props;

      return (
         <div>
            <h1 className="m-3 text-monospace font-weight-bold">Total :  <span>{total}</span></h1>
            <button onClick={onReset} className="button btn btn-primary btn-sm m-3" disabled={this.handleDisableButton()}>Reset</button>
            <button onClick={addEntry} className="button btn btn-success btn-sm m-3">Add Entry</button>
            {
               counters.map(counter =>
                  <Counter
                     key={counter.id}
                     onDelete={onDelete}
                     onIncrement={onIncrement}

                     // atribut counter: menampung data yang diloop 
                     counter={counter}
                  />
               )
            }
         </div>
      );
   }

   // untuk membuat tombol menjadi disable 
   handleDisableButton = () => {
      const data = this.props.counters;
      const count = this.props.counters.filter(c => c.value > 0).length;
      return count === 0 || data.length === 0 ? true : false;
   }
}

export default Counters;