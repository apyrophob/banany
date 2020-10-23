import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import { NavbarComponent } from '../components/Navbar/NavBar'
import { FooterComponent } from '../components/Footer/Footer'
import { InfoSectionComponent } from '../components/InfoSection/InfoSectionComponent'

function App() {

    const stateCustom = {
        controls: [
            {
                linkHref: '/project',
                linkTitle: 'Project'
            },
            {
                linkHref: '/thesis',
                linkTitle: 'Thesis'
            },
            {
                linkHref: '/process',
                linkTitle: 'Process'
            },
        ],
        sourceForImage: 'img.jpeg',
        buttonsSettings: [
            {
                title: 'instagram',
                iconSrc: 'fab fa-instagram',
            },
        ],
        infoSectionConfigs: [
            {
                linkHref: '#',
                imgSrc: 'img.jpeg',
                linkTitle: 'Title1',
            },
            {
                linkHref: '#2',
                imgSrc: 'img2.jpeg',
                linkTitle: 'Title2',
            },
        ]
    }





    return (
        <div className="App">
            <BrowserRouter>
                <Route path='/project'
                    render={() =>
                        <div>
                            <NavbarComponent
                                controls={stateCustom.controls}
                                imgSrcPassedFromAppJS={stateCustom.sourceForImage}
                            />
                            {stateCustom.infoSectionConfigs.map(config => (
                                <InfoSectionComponent
                                    linkHref={config.linkTitle}
                                    imgSrc={config.imgSrc}
                                    linkTitle={config.linkTitle}
                                />
                            ))}
                            <FooterComponent buttonsSettings={stateCustom.buttonsSettings} />
                        </div>
                    }
                />
                <Route path='/thesis'
                    render={() => <NavbarComponent
                        controls={stateCustom.controls}
                        imgSrcPassedFromAppJS={stateCustom.sourceForImage}
                    />}
                />
                <Route path='/process'
                    render={() => <NavbarComponent
                        controls={stateCustom.controls}
                        imgSrcPassedFromAppJS={stateCustom.sourceForImage}
                    />}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
