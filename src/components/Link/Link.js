import React from 'react';
import PropTypes from 'prop-types';

export const LinkComponent = props => {
    const { linkHref, linkTitle } = props;

    return (
        <a className='link' href={linkHref}>{linkTitle}</a>
    );
};

LinkComponent.propTypes = {
    linkHref: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired
};