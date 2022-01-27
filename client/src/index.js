import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Redux persist experiment - should work!
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { configureStore } from './store.js';
import App from './App.js';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store} >
        <PersistGate persistor={persistor} loading={<div>Application Loading...</div>}>
            <App />
        </PersistGate>
    </Provider>, 
    document.getElementById('root'),
);