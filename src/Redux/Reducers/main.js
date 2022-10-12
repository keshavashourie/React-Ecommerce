import {combineReducers} from 'redux';
import { cartreducer } from './reducer';

const root = combineReducers({
    cartreducer
});

export default root;