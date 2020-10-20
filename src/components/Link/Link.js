import React from 'react';
import PropTypes from 'prop-types';

export const LinkComponent = props => {
    const { linkHref } = props;

    return (
        <a className='link' href={linkHref}></a>
    );
};

LinkComponent.PropTypes = {
    linkHref: PropTypes.string.isRequired,
};