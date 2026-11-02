import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './BlueLandingPage.jsx';

const root = document.getElementById('root');
const page = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
if (root.hasChildNodes()) hydrateRoot(root, page);
else createRoot(root).render(page);
