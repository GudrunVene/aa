
import {
    SET_PAGE,
    APPLY_TAG_FILTER,
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
    CHANGE_TAB,
    PROFILE_PAGE_LOADED,
    PROFILE_PAGE_UNLOADED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {

        case SET_PAGE:
            return {
                ...state,
                songs: action.payload.songs,
               songsCount: action.payload.songsCount,
                currentPage: action.page
            };
        case APPLY_TAG_FILTER:
            return {
                ...state,
                pager: action.pager,
                songs: action.payload.songs,
                songsCount: action.payload.songsCount,
                tab: null,
                tag: action.tag,
                currentPage: 0
            };
        case HOME_PAGE_LOADED:
            return {
                ...state,
                pager: action.pager,
                songs: action.payload[1].songs,
               songsCount: action.payload[1].songsCount,
                currentPage: 0,
                tab: action.tab
            };
        case HOME_PAGE_UNLOADED:
            return {};
        case CHANGE_TAB:
            return {
                ...state,
                pager: action.pager,
                songs: action.payload.songs,
                songsCount: action.payload.songsCount,
                tab: action.tab,
                currentPage: 0
            };

        case PROFILE_PAGE_LOADED:
            return {
                ...state,
                pager: action.pager,
                tags: action.payload[0].tags,
                songs: action.payload[1].songs,
                songsCount: action.payload[1].songsCount,
                currentPage: 0,
                tab: action.tab
            };
        case PROFILE_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
};
