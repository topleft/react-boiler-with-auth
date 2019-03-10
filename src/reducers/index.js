import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import home, { initialState as homeInitialState } from './home';
import user, { initialState as userInitialState } from './user';

const reducers = {
  home,
  user
};

export const initialState = Map({
  home: homeInitialState,
  user: userInitialState,
});

export default combineReducers( reducers );
