import React from 'react';
import PropTypes from 'prop-types';

export const ImageComponent = props => {
    const { imgSrc } = props;

    return (
        <img className='image' src={imgSrc} />
    );
};

ImageComponent.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
};

ImageComponent.defautProps = {
    imgSrc: "fab fa-pinterest",
};