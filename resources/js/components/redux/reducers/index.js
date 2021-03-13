import {combineReducers} from 'redux';
import loginReducer from './login';

const rootReducer = combineReducers(
    {
        isLogin: loginReducer
    }
);
console.log(rootReducer);

export default rootReducer;