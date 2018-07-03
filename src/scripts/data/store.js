import  { createStore } from 'redux';

import reducers from './planReducers';

export default createStore( reducers );