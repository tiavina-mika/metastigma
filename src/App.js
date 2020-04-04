
import React from 'react';
import WebFont from 'webfontloader';
import Routes from './routes';

WebFont.load({
    google: {
      families: ['Noto Serif', 'Proxima Nova', 'Montserrat', 'Playfair Display']
    }
});

const App = () => <Routes />

export default App;