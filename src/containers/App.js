import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import { ContentComponent } from '../containers/Content'
import { NavbarComponent } from '../components/Navbar/NavBar'

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
        infoSectionConfigsProject: [
            {
                linkHref: '#',
                imgSrc: 'img.jpeg',
                linkTitle: 'Title1',
                infoSectionText: 'Project infoSection',
            },
            {
                linkHref: '#2',
                imgSrc: 'img2.jpeg',
                linkTitle: 'Title2',
                infoSectionText: 'Project infoSection',
            },
        ],
        infoSectionConfigsThesis: [
            {
                linkHref: '#',
                imgSrc: 'img.jpeg',
                linkTitle: 'Title1',
                infoSectionText: 'Thesis infoSection',
            },
            {
                linkHref: '#2',
                imgSrc: 'img2.jpeg',
                linkTitle: 'Title2',
                infoSectionText: 'Thesis infoSection',
            },
            {
                linkHref: '#2',
                imgSrc: 'img2.jpeg',
                linkTitle: 'Title2',
                infoSectionText: 'Thesis infoSection',
            },
        ],
        infoSectionConfigsProcess: [
            {
                linkHref: '#',
                imgSrc: 'img.jpeg',
                linkTitle: 'Title1',
                infoSectionText: 'Process infoSection',
            },
            {
                linkHref: '#2',
                imgSrc: 'img2.jpeg',
                linkTitle: 'Title2',
                infoSectionText: 'Process infoSection',
            },
            {
                linkHref: '#2',
                imgSrc: 'img2.jpeg',
                linkTitle: 'Title2',
                infoSectionText: 'Process infoSection',
            },
        ],
    }





    return (
        <div className="App">
            <BrowserRouter>
                <Route path='/'
                    render={() =>
                        <NavbarComponent
                            controls={stateCustom.controls}
                            imgSrcPassedFromAppJS={stateCustom.sourceForImage}
                        />
                    }
                />
                <Route path='/project'
                    render={() =>
                        <ContentComponent
                            controls={stateCustom.controls}
                            imgSrcPassedFromAppJS={stateCustom.sourceForImage}
                            buttonsSettings={stateCustom.buttonsSettings}
                            infoSectionConfigs={stateCustom.infoSectionConfigsProject}
                        />
                    }
                />
                <Route path='/thesis'
                    render={() =>
                        <ContentComponent
                            controls={stateCustom.controls}
                            imgSrcPassedFromAppJS={stateCustom.sourceForImage}
                            buttonsSettings={stateCustom.buttonsSettings}
                            infoSectionConfigs={stateCustom.infoSectionConfigsThesis}
                        />}
                />
                <Route path='/process'
                    render={() =>
                        <ContentComponent
                            controls={stateCustom.controls}
                            imgSrcPassedFromAppJS={stateCustom.sourceForImage}
                            buttonsSettings={stateCustom.buttonsSettings}
                            infoSectionConfigs={stateCustom.infoSectionConfigsProcess}
                        />}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
