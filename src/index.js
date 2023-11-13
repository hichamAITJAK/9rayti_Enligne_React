import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProvider from './components/home/context/userContext';
import { Provider } from 'react-redux';
import { store  } from './components/home/context/Store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <UserProvider>
         <Provider store = {store}>                
                <App />
         </Provider>
        </UserProvider>
);
