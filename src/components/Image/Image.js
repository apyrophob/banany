import React from 'react';

export const ImageComponent = props => {
    const { imgSrc } = props;

    return (
        <img src={imgSrc} />
    );
};


// todo PropTypes