import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BasicComponents from './components/basic_components/Index';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './components/redux/reducers/index';

export default class TrangChu extends Component{
    render(){
        return (
            <BasicComponents/>
        )
    }
} 
const store = createStore(rootReducer);
const root = document.querySelector("#root");
if(root)
{
    ReactDOM.render(
    <Provider store={store}>
        <Router><TrangChu/></Router>
    </Provider>, root);
}