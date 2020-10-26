import React from 'react';

import { ImageComponent } from '../Image/Image'
import { LinkComponent } from '../Link/Link'

export const NavbarComponent = props => {
    const { controls, imgSrcPassedFromAppJS } = props;

    return (
        <nav className='nav-controls'>
            <div className='navbar-logo'>
                <ImageComponent imgSrc={imgSrcPassedFromAppJS} />
            </div>
            <ul>
                {controls.map((control) => {
                    return (
                        <li>
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