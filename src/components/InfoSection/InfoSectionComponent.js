import React from 'react'
import PropTypes from 'prop-types'

import { ImageComponent } from '../Image/Image'
import { LinkComponent } from '../Link/Link'

export const InfoSectionComponent = props => {
    const { linkHref, imgSrc } = props;

    const addComponentByProps = () => (props.linkHref) ? (<LinkComponent href={linkHref} />) :
        (props.imgSrc) ? (<ImageComponent src={imgSrc} />) :
            (<LinkComponent href={linkHref} />, <ImageComponent src={imgSrc} />)
        ;

    return (
        <div className='info-section'>
            <div className='info-section-text'>Block of Text.</div>
            <div className='info-section-component'>
                {addComponentByProps}
            </div>
        </div>
    );
};