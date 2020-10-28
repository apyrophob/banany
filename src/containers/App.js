import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { stateCustom } from '../state';

import { ContentComponent } from '../components/Content/Content'

const App = () => {
    const { stateCustom } = props;

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
};

App.propTypes = {
    navbarSettings: PropTypes.shape({
        controls: PropTypes.array.isRequired,
        navbarImage: PropTypes.string.isRequired,
    }),
    footerSettings: PropTypes.shape ({
        buttonsSettings: PropTypes.array.isRequired,
        footerText: PropTypes.string.isRequired,
    }),
};

export default App;
