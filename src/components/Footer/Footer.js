import React from 'react';
import PropTypes from 'prop-types';
import { SocialMediaButton } from '../Buttons/SocialMediaButton'

export const FooterComponent = props => {
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

FooterComponent.propTypes = {
    buttonsSettings: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            iconSrc: PropTypes.string.isRequired,
        }).isRequired
    ),
};

FooterComponent.defaultProps = {
    buttonsSettings: {
        title: "Default button title",
        iconSrc: "fab fa-instagram",
    },
};
