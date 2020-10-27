import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { stateCustom } from '../state';

import { ContentComponent } from '../components/Content/Content'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    );
}

export default App;
