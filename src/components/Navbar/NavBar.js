import React from 'react';

import { ImageComponent } from '../Image/Image'

export const NavbarComponent = props => {
    const { NavItems } = props;

    return (
        <nav className='nav-items'>
            <div className='navbar-logo'>
                <ImageComponent />
            </div>
            <ul>
                {NavItems.map((item) => {
                    return (
                        <li>
                            <a className='nav-link' href={item.href}>
                                {item.children}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};