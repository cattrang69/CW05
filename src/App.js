import React, { Component } from 'react'; 
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';
import './App.css'; 

const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Carrot", type: "Vegetable" },
  { name: "Broccoli", type: "Vegetable" },
  { name: "Strawberry", type: "Fruit" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Fundamentals Hub</h1>
        </header>

        <main className="container">
          <HelloWorld />
          <hr />
          <Counter />
          <hr />
          <FilteredList items={produce} />
        </main>
      </div>
    );
  }
}

export default App;