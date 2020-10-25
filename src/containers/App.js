import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { stateCustom } from '../state';

import { ContentComponent } from '../containers/Content'

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
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
