import React from 'react';

import { NavbarComponent } from '../Navbar/NavBar'
import { FooterComponent } from '../Footer/Footer'
import { InfoSectionComponent } from '../InfoSection/InfoSectionComponent'

export const ContentComponent = props => {
    const { controls, buttonsSettings, infoSectionConfigs, navbarImageSrc } = props;
    return (
        <div>
            <NavbarComponent
                controls={controls}
                imgSrcPassedFromAppJS={navbarImageSrc}
            />
            {infoSectionConfigs.map((config, index) => (
                <InfoSectionComponent
                    key={index}
                    linkHref={config.linkTitle}
                    imgSrc={config.imgSrc}
                    linkTitle={config.linkTitle}
                    infoSectionText={config.infoSectionText}
                />
            ))}
            <FooterComponent buttonsSettings={buttonsSettings} />
        </div>
    );
};


