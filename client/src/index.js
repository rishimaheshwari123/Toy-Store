import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />

            <ToastContainer />
    
        </Provider>
    </BrowserRouter>
);
