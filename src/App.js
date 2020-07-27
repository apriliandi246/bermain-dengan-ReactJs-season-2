import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Counters from './components/Counters';

class App extends Component {
  state = {
    total: 0,
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
    this.handleTotal('increment');
  }

  handleDecerement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({ counters });
    this.handleTotal('decrement');
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ total: 0 });
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    let total = 0;

    const counters = this.state.counters.filter(c => c.id !== counterId);

    counters.map(c => {
      total += c.value;
      return total;
    });

    this.setState({ total });
    this.setState({ counters });
  }

  handleTotal = (process) => {
    if (process === 'increment') {
      const total = this.state.counters.reduce((total, counter) => counter.value + total, 1);
      this.setState({ total });

    } else {
      this.setState({ total: this.state.total - 1 });
    }
  }

  handleAddEntry = () => {
    const counters = [...this.state.counters];
    counters.push({ id: Date.now(), value: 0 });
    this.setState({ counters });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />

        <main className="container">
          <Counters
            total={this.state.total}
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            addEntry={this.handleAddEntry}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecerement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;