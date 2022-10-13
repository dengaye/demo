import { createStore } from 'redux';

import reducers from './reducers';

const setStore = (state = {}) => createStore(reducers, state);

export default setStore;
