import React, { Component } from "react";
import CardList from "./component/card-list/card-list.component.jsx";
import SearchField from "./component/search-box/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ monsters: data });
      });
  }

  filterMonsters(str) {
    return this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(str.toLowerCase());
    });
  }

  handleSearchField(e) {
    this.setState({ searchField: e.target.value }, () => {
      // console.log(this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField
          type="search"
          placeholder="search monsters"
          handleSearchField={(e) => this.handleSearchField(e)}
        />
        <CardList
          monsters={this.filterMonsters(this.state.searchField)}
        ></CardList>
      </div>
    );
  }
}

export default App;
