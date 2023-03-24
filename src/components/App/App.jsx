import { Component } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContaactsList';
import Filter from 'components/Filter/Filter';
import { Container } from './App,styled';

class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [{ ...data }, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter />
        <ContactsList contacts={this.state.contacts} />
      </Container>
    );
  }
}
export default App;
