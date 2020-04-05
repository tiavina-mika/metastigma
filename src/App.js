
import React from 'react';
import WebFont from 'webfontloader';
import Routes from './routes';

WebFont.load({
    google: {
      families: ['Bell MT', 'Palatino', 'Montserrat', 'Playfair Display', 'Franklin Gothic']
    }
});

const App = () => <Routes />

export default App;