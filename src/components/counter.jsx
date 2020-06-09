import React, { Component } from 'react';

class Counter extends Component {
   state = {
      count: 0,
      imageUrl: 'https://picsum.photos/200'
   };

   styles = {
      fontWeight: 'bold',
      fontSize: 10,
      textAlign: 'center',
      marginTop: 20
   }

   render() {
      return (
         <div>
            {/* <img src={this.state.imageUrl} alt="" /> */}
            <span className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <p style={this.styles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit delectus non doloribus officiis reprehenderit dignissimos consequatur voluptatem saepe iusto explicabo corrupti, commodi laudantium officia ea minus dolor nemo molestiae!</p>
         </div>
      );
   }

   formatCount() {
      const { count } = this.state;
      return count === 0 ? 'zero' : count;
   }
}

export default Counter;