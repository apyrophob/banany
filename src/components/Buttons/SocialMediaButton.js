import React from 'react';
import PropTypes from 'prop-types';

export const SocialMediaButtonComponent = props => {
    const { onClick, buttonTitle } = props;

    return (
        <i onClick={onClick}>{buttonTitle}</i>
    );
};

SocialMediaButtonComponent.propTypes = {
    buttonTitle: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

SocialMediaButtonComponent.defaultProps = {
    buttonTitle: 'Default button',
    onClick: () => console.log('Default'),
};