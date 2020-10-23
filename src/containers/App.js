import React from 'react';
import './App.css';

import { NavbarComponent } from '../components/Navbar/NavBar'

function App() {
    const controls = [
        {
            linkHref: '#',
            linkTitle: 'Title1',
            
        },
        {
            linkHref: '#',
            linkTitle: 'Title2',
            
        }
    ]

    return (
        <div className="App">
            <NavbarComponent controls={controls} />
        </div>
    );
}

export default App;
