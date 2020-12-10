import React from 'react';
import PropTypes from 'prop-types';

import { InfoSectionComponent } from '../InfoSection/InfoSectionComponent'

export const ContentComponent = props => {
    const { infoSectionConfigs } = props;
    return (
        <div>
            {infoSectionConfigs.map((config, index) => (
                <InfoSectionComponent
                    key={index}
                    linkHref={config.linkTitle}
                    imgSrc={config.imgSrc}
                    linkTitle={config.linkTitle}
                    infoSectionText={config.infoSectionText}
                />
            ))}
        </div>
    );
};

ContentComponent.propTypes = {
    infoSectionConfigs: PropTypes.arrayOf(
        PropTypes.shape({
            linkHref: PropTypes.string.isRequired,
            imgSrc: PropTypes.string.isRequired,
            linkTitle: PropTypes.string.isRequired,
            infoSectionText: PropTypes.string.isRequired,
        })
    ),
};


