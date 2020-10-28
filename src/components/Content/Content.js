import React from 'react';

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


