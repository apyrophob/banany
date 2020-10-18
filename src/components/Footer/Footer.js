import React from 'react';
import PropTypes from 'prop-types';
import { SocialMediaButton } from '../Buttons/SocialMediaButton'

export const Footer = props => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Contact Info</p>
            </div>
            <div className="footer-icons">
                {props.buttonsSettings.map(el => (
                    <SocialMediaButton
                        buttonTitle={el.title}
                        iconSrc={el.iconSrc}
                    />
                ))}
            </div>
        </footer>
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

//todo
// 1. Component конвенция
