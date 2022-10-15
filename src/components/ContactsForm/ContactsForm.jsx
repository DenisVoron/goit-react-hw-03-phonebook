import React, { Component } from 'react'

import css from './ContactsForm.module.css';


export class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onDataSubmit(this.state);

        this.reset();
    };


    reset = () => {
        this.setState({ name: '', number: '' });
    };

    handleNameChange = event => {
        const name = event.currentTarget.name;

        this.setState({
            [name]: event.currentTarget.value,
        });
    };

  render() {
      return (
          <div className={css.wrapper}>
              <form autoComplete='off' className={css.form} onSubmit={this.handleSubmit}>
                  <label className={css['form-label']}>
                      Name
                      <input
                          type="text"
                          className={css.input}
                          name="name"
                          value={this.state.name}
                          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                          required
                          onChange={this.handleNameChange}
                      />
                  </label>
                  <label htmlFor="">
                      Number
                      <input
                          type="tel"
                          className={css.input}
                          name="number"
                          value={this.state.number}
                          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                          required
                          onChange={this.handleNameChange}
                      />
                  </label>
                  <button type='submit'>Add contact</button>
              </form>
          </div>
      );
  }
}