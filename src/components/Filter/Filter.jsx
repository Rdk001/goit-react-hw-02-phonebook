import { Component } from 'react';
class Filter extends Component {
  render() {
    return (
      <div>
        <h2>Find contacts by name</h2>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </div>
    );
  }
}

export default Filter;
