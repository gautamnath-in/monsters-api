import './App.css';
import { Component } from 'react';

import { CardList } from './components/card-lists/card-list.component';
import { SearchBox } from './components/seacrh-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // // bind:is a method on any function that returns a new function
    // // where the context of this is set to whatever we passed to it.
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    // _____________OR_______________

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))



    return (
      <div className="App">
        <h1 className='title'>MONSTERS ROLODEX</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
