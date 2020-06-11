import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   state = {
      counters: [
         { id: 1, value: 0 },
         { id: 2, value: 0 },
         { id: 3, value: 0 },
         { id: 4, value: 0 }
      ]
   }

   render() {
      return (
         <div>
            <button onClick={this.handleReset} className="button btn btn-primary btn-sm m-2">Reset</button>
            {
               this.state.counters.map(counter =>
                  <Counter
                     key={counter.id}
                     onDelete={this.handleDelete}
                     onIncrement={this.handleIncrement}

                     // atribut counter: menampung data yang diloop 
                     counter={counter}
                  />
               )
            }
         </div>
      );
   }

   handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters: counters });
   }

   handleReset = () => {
      // me-reset semua nilai counter nya menjadi nol
      const counters = this.state.counters.map(c => {
         c.value = 0;
         return c;
      });

      this.setState({ counters: counters });
   }

   handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      console.log(counters);
      this.setState({ counters: counters });
   }
}

export default Counters;