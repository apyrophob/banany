import React from 'react'

import { ImageComponent } from '../Image/Image'
import { LinkComponent } from '../Link/Link'

export const InfoSectionComponent = props => {
    const { linkHref, imgSrc, linkTitle, infoSectionText } = props;
    return (
        <div className='info-section'>
            <div className='info-section-text'>{infoSectionText}</div>
            <div className='info-section-component'>
                {linkHref &&
                    (<LinkComponent linkTitle={linkTitle} linkHref={linkHref} />)
                }
                {imgSrc &&
                    (<ImageComponent imgSrc={imgSrc} />)
                }
            </div>
        </div>
    );
};