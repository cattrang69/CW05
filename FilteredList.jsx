import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  handleFilter = (eventKey) => {
    this.setState({ type: eventKey });
  };

  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
    const matchesType = this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div className="task-card">
        <h2>Search & Filter List</h2>
        <div className="filter-controls">
          <input type="text" placeholder="Search..." onChange={this.onSearch} />
          
          <DropdownButton id="typeDropdown" title={`Type: ${this.state.type}`} onSelect={this.handleFilter}>
            <MenuItem eventKey="All">All</MenuItem>
            <MenuItem eventKey="Fruit">Fruit</MenuItem>
            <MenuItem eventKey="Vegetable">Vegetable</MenuItem>
          </DropdownButton>
        </div>

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}


export default FilteredList;