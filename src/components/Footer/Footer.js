import React from 'react';
import PropTypes from 'prop-types';
import { SocialMediaButton } from '../Buttons/SocialMediaButton'

export const Footer = props => {
    return (
        <div>
            <div>
                <p>Contact Info</p>
            </div>
            {props.buttonsSettings.map(el => (
                <SocialMediaButton
                    buttonTitle={el.title}
                    iconSrc={el.iconSrc}
                />
            ))}
        </div>
    );
};

Footer.propTypes = {
    buttonsSettings: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            iconSrc: PropTypes.string.isRequired,
        }).isRequired
    ),
};

Footer.defaultProps = {
    buttonsSettings: {
        title: "Default button title",
        iconSrc: "fab fa-instagram",
    },
};