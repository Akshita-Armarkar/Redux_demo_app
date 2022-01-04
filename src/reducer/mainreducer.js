import {combineReducers} from 'redux';
import UserList from './userreducer';
import ItemList from './itemreducer';
import Apidata from './apireducer';

const mainreducer = combineReducers(
    {
        UserList , ItemList,Apidata
    }
);

export default mainreducer;