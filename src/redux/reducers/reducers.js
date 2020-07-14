import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import categoriesReducer from './categoriesReducer';
import imagesReducer from './imagesReducer';
import messagesReducer from './messagesReducer';
import ordersReducer from './ordersReducer';
import productsReducer from './productsReducer';
import settingReducer from './settingsReducer';

export default combineReducers({
    accountReducer,
    categoriesReducer,
    imagesReducer,
    messagesReducer,
    ordersReducer,
    productsReducer,
    settingReducer,
});