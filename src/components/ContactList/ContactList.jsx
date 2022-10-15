import PropTypes from 'prop-types'

import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => (

    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={css['list-item']}>
                <p className={css['list-descr']}>{name}: <span>{number}</span></p>
                <button type="button" className={css['list-btn']} onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),

    onDeleteContact: PropTypes.func.isRequired
};