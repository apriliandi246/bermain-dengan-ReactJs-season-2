import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   render() {
      return (
         <div>
            <button onClick={this.props.onReset} className="button btn btn-primary btn-sm m-2" disabled={this.handleDisableButton()}>Reset</button>
            {
               this.props.counters.map(counter =>
                  <Counter
                     key={counter.id}
                     onDelete={this.props.onDelete}
                     onIncrement={this.props.onIncrement}

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