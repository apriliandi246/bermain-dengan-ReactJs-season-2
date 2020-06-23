import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ],
    total: 0
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
            total={this.state.total}
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            addEntry={this.handleAddEntry}
            onIncrement={this.handleIncrement}
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
    this.handleTotal();
  }

  handleReset = () => {
    // me-reset semua nilai counter nya menjadi nol
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ total: 0 });
    this.setState({ counters: counters });
  }

  handleDelete = (counterId) => {
    let total = 0;

    const counters = this.state.counters.filter(c => c.id !== counterId);

    counters.map(c => {
      total += c.value;
      return total;
    });

    this.setState({ total });
    this.setState({ counters: counters });
  }

  handleTotal = () => {
    let total = 1;

    this.state.counters.map(c => {
      total += c.value;
      return total;
    });

    this.setState({ total });
  }

  handleAddEntry = () => {
    const counters = [...this.state.counters];
    counters.push({ id: Date.now(), value: 0 });
    this.setState({ counters });
  }
}


export default App;