import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap'; // Dropdown imported here
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
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
            <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
          </DropdownButton>
        </div>

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;