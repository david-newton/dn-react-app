import { createStore, combineReducers, applyMiddleware } from 'redux';

//NOTE - first time trying redux persist - wip - using default doc suggestions
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import { todolist, isLoading } from './todolist/reducers/reducers';

const reducers = {todolist, isLoading};
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => 
    createStore(
        persistedReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );