import React from 'react';
import PropTypes from 'prop-types';
import { SocialMediaButtonComponent } from '../Buttons/SocialMediaButton'

export const FooterComponent = props => {
    const { buttonsSettings, footerText } = props;

        
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>{ footerText }</p>
            </div>
            <div className="footer-icons">
                {buttonsSettings.map(btnSettings => (
                    <SocialMediaButtonComponent
                        buttonTitle={btnSettings.title}
                        iconSrc={btnSettings.iconSrc}
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
