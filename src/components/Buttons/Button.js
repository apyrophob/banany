import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
    const { onClick, buttonTitle } = props; 

    return (
        <button onClick={onClick}>{buttonTitle}</button>
    );
};

Button.propTypes = {
    buttonTitle: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    buttonTitle: 'Default button',
    onClick: () => console.log('Default'), //todo
};