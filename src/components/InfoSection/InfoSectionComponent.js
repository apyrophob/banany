import React from 'react'

import { ImageComponent } from '../Image/Image'
// import { LinkComponent } from '../Link/Link'

export const InfoSectionComponent = props => {
    const { linkHref, imgSrc } = props;

    return (
        <div className='info-section'>
            <div className='info-section-text'>Block of Text.</div>
            <div className='info-section-component'>
                {linkHref &&
                    (<LinkComponent href={linkHref} />)
                }
                {imgSrc &&
                    (<ImageComponent src={imgSrc} />)
                }
            </div>
        </div>
    );
};