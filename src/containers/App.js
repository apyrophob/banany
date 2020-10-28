import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { stateCustom } from '../state';

import { ContentComponent } from '../components/Content/Content';
import { NavbarComponent } from '../components/Navbar/NavBar'
import { FooterComponent } from '../components/Footer/Footer'


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <NavbarComponent
                    controls={stateCustom.navbarSettings.controls}
                    navbarImage={stateCustom.navbarSettings.navbarImage}
                />
                <Route
                    path='/'
                >
                    <Route path='/project'
                        render={() =>
                            <ContentComponent
                                navbarSettings={stateCustom.navbarSettings}
                                footerSettings={stateCustom.footerSettings}
                                infoSectionConfigs={stateCustom.infoSectionConfigsProject}
                            />
                        }
                    />
                    <Route path='/thesis'
                        render={() =>
                            <ContentComponent
                                navbarSettings={stateCustom.navbarSettings}
                                footerSettings={stateCustom.footerSettings}
                                infoSectionConfigs={stateCustom.infoSectionConfigsThesis}
                            />}
                    />
                    <Route path='/process'
                        render={() =>
                            <ContentComponent
                                navbarSettings={stateCustom.navbarSettings}
                                footerSettings={stateCustom.footerSettings}
                                infoSectionConfigs={stateCustom.infoSectionConfigsProcess}
                            />}
                    />
                </Route>
                <FooterComponent
                    buttonsSettings={stateCustom.footerSettings.buttonsSettings}
                    footerText={stateCustom.footerSettings.footerText}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
