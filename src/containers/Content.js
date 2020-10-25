import React from 'react';

import { NavbarComponent } from '../components/Navbar/NavBar'
import { FooterComponent } from '../components/Footer/Footer'
import { InfoSectionComponent } from '../components/InfoSection/InfoSectionComponent'

export const ContentComponent = props => {
    const { controls, imgSrcPassedFromAppJS, buttonsSettings, infoSectionConfigs} = props;
    // console.log(1, props)
    return (
        <div>
            <NavbarComponent
                controls={controls}
                imgSrcPassedFromAppJS={imgSrcPassedFromAppJS}
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


