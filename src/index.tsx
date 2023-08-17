import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import { Provider } from "react-redux";
import allReducers from "./plugin/store";
const store = createStore(allReducers);
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
 <Provider store={store}>
 <App />
</Provider>,
)
