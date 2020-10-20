import React from 'react';
import PropTypes from 'prop-types';

export const LinkComponent = props => {
    const { linkHref } = props;

    return (
        <link className='link' href={linkHref} />
    );
};

LinkComponent.PropTypes = {
    linkHref: PropTypes.string.isRequired,
};

LinkComponent.defautProps = {
    linkHref: "someLink.com",
};