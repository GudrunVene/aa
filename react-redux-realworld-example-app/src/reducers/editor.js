import {
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED,

  SONG_SUBMITTED,
  ASYNC_START,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case EDITOR_PAGE_LOADED:
      return {
        ...state,

        songSlug: action.payload ? action.payload.song.slug : '',
        title: action.payload ? action.payload.song.title : '',
        description: action.payload ? action.payload.song.description : '',
        body: action.payload ? action.payload.song.body : '',
        tagInput: '',
        tagList: action.payload ? action.payload.song.tagList : []

      };
    case EDITOR_PAGE_UNLOADED:
      return {};

    case SONG_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };

    case ASYNC_START:
      if (action.subtype === SONG_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
    case UPDATE_FIELD_EDITOR:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
