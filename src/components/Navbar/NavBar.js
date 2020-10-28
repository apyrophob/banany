import React from 'react';
import PropTypes from 'prop-types';

import { ImageComponent } from '../Image/Image'
import { LinkComponent } from '../Link/Link'

export const NavbarComponent = props => {
    const { controls, navbarImage } = props;

    return (
        <nav className='nav-controls'>
            <div className='navbar-logo'>
                <ImageComponent imgSrc={navbarImage} />
            </div>
            <ul>
                {controls.map((control, index) => {
                    return (
                        <li key={control.id}>
                            <LinkComponent className='nav-link'
                                linkHref={control.linkHref}
                                linkTitle={control.linkTitle}
                            />
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

NavbarComponent.PropTypes = {
    controls: PropTypes.arrayOf(
        PropTypes.shape({
            linkHref: PropTypes.string.isRequired,
            linkTitle: PropTypes.string.isRequired,
        })
    ),
    navbarImage: PropTypes.string.isRequired,
};