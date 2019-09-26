import {
    SONG_PAGE_LOADED,
    SONG_PAGE_UNLOADED,

} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case SONG_PAGE_LOADED:
            return {
                ...state,
                song: action.payload[0].song
            };
        case SONG_PAGE_UNLOADED:
            return {};

        default:
            return state;
    }
};
