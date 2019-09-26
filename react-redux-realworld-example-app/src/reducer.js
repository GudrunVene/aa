
import song from './reducers/song';
import songList from './reducers/songList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  song,
  songList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  router: routerReducer
});
