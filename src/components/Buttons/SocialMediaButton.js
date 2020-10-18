import React from 'react';
import PropTypes from 'prop-types';

export const SocialMediaButton = props => {
    const { onClick, buttonTitle } = props;

    return (
        <i onClick={onClick}>{buttonTitle}</i>
    );
};

SocialMediaButton.propTypes = {
    buttonTitle: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

SocialMediaButton.defaultProps = {
    buttonTitle: 'Default button',
    onClick: () => console.log('Default'), //todo
};

//todo
// 1. Component конвенция