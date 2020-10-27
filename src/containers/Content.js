import React from 'react';

import { NavbarComponent } from '../components/Navbar/NavBar'
import { FooterComponent } from '../components/Footer/Footer'
import { InfoSectionComponent } from '../components/InfoSection/InfoSectionComponent'

export const ContentComponent = props => {
    const { navbarSettings, footerSettings, infoSectionConfigs } = props;
    return (
        <div>
            <NavbarComponent
                controls={navbarSettings.controls}
                navbarImage={navbarSettings.navbarImage}
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
            <FooterComponent
                buttonsSettings={footerSettings.buttonsSettings}
                footerText={footerSettings.footerText}
            />
        </div>
    );
};


