import React, { Component } from 'react';

class Counter extends Component {
   render() {
      return (
         <div>
            <span className={this.getBadgeClasses()} style={{ fontSize: 18 }}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-3">Delete</button>
         </div>
      );
   }

   getBadgeClasses() {
      let classes = "badge m-3 badge-";
      return classes += (this.props.counter.value === 0) ? "warning" : "primary";
   }

   formatCount() {
      const { value: count } = this.props.counter;
      return count === 0 ? 'zero' : count;
   }
}

export default Counter;