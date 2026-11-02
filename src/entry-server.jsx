import React from 'react';
import { renderToString } from 'react-dom/server';
import BlueLandingPage from './BlueLandingPage.jsx';

export function render() {
    return renderToString(<BlueLandingPage />);
}
