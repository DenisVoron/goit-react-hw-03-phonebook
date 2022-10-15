import PropTypes from 'prop-types';

import css from './Filter.module.css';

export const Filter = ({ value, onFilterChange }) => (

    <label htmlFor="" className={css['inpyt-filter']}>
        Find contacts by name
        <input type="text" value={value} onChange={onFilterChange}/>
    </label>
);

Filter.prototype = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
}