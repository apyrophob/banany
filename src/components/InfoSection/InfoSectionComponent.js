import React from 'react'
import PropTypes from 'prop-types';

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

InfoSectionComponent.propTypes = {
    linkHref: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired,
    infoSectionText: PropTypes.string.isRequired,
};