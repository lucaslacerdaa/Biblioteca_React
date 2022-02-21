import { createStore } from 'redux';
import cart from './Modules/cart/reducer';
import rootReducer from './Modules/rootReducer';

const store = createStore(() => (rootReducer));

export default store;