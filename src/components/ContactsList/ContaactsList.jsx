import { Component } from 'react';
import Span from './ContactList.styled';
class ContactsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(({ id, name, number }) => (
            <li key={id}>
              <Span>{name}: </Span>
              <Span>{number}</Span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
