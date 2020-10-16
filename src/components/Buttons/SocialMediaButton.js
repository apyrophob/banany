import React from 'react';
import PropTypes from 'prop-types';

export const SocialMediaButton = props => {
    const { onClick, } = props; 

    return (
        <button onClick={onClick}></button>
    );
};

Button.propTypes = {
    buttonTitle: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    buttonTitle: 'Default button',
    onClick: () => console.log('Default'),
};