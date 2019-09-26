import {
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED,
  ARTICLE_SUBMITTED,
  ASYNC_START,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case EDITOR_PAGE_LOADED:
      return {
        ...state,
        articleSlug: action.payload ? action.payload.article.slug : '',
        title: action.payload ? action.payload.article.title : '',
        description: action.payload ? action.payload.article.description : '',
        body: action.payload ? action.payload.article.body : '',
        tagInput: '',
        tagList: action.payload ? action.payload.article.tagList : []
      };
    case EDITOR_PAGE_UNLOADED:
      return {};
    case ARTICLE_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === ARTICLE_SUBMITTED) {
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
