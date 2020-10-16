import React from 'react';
import { SocialMediaButton } from '../Buttons/SocialMediaButton'

export const Footer = props => {
    return (
        <footer>
            <div>
                <p>Contact Info</p>
            </div>
            <div>
                <SocialMediaButton />
            </div>
            <div>
                <SocialMediaButton />
            </div>
        </footer>
    );
};