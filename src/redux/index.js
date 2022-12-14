//redux
import { createStore, applyMiddleware } from 'redux';
//redux-persist
import { persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//redux-thunk
import thunk from 'redux-thunk';

//others imports
import { rootReducers } from './rootReducers';


//persistStore Configs
const persistConfig = {
	key: 'root',
	storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducers);


//createStore
	export const store = createStore(persistedReducer, applyMiddleware(thunk));
	export const persistor = persistStore(store);
