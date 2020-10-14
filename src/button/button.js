import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, children }) => {

    return (
        <button onClick={onClick}>{children}</button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {}
};