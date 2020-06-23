import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
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
      <React.Fragment>

        {/* 
            totalCounters => menghitung ada berapa nilai dari proeprti value yang lebih besar dari
        */}
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />

        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
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

  // mengubah state nya menjadi nilai yang tidak sama dengan id dari element yang mau dihapus
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  }
}


export default App;