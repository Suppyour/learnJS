import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import App from './App';
import InDeCrement from "./InDeCrement";
import Value from "./Value";

const root = createRoot(document.getElementById('root'));
root.render([<App/>, <InDeCrement/>, <Value/>]
)