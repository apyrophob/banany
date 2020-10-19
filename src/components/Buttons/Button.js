import React from 'react';
import PropTypes from 'prop-types';

export const ButtonComponent = props => {
    const { onClick, buttonTitle } = props; 

    return (
        <button onClick={onClick}>{buttonTitle}</button>
    );
};

ButtonComponent.propTypes = {
    buttonTitle: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

ButtonComponent.defaultProps = {
    buttonTitle: 'Default button',
    onClick: () => console.log('Default'),
};