/**
 * Types
 */
export const Types = {
  SET_SONG_REQUEST: 'player/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'player/SET_SONG_SUCCESS',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREVIOUS: 'player/PREVIOUS',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  currentSong: {},
  playlist: [],
  loadingId: null,
  isPaused: false,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_SONG_REQUEST:
      return {
        ...state,
        loadingId: action.payload.song.id,
      };
    case Types.SET_SONG_SUCCESS:
      return {
        ...state,
        currentSong: action.payload.song,
        loadingId: null,
        isPaused: false,
        playlist: action.payload.list,
      };
    case Types.PLAY:
      return {
        ...state,
        isPaused: false,
      };
    case Types.PAUSE:
      return {
        ...state,
        isPaused: true,
      };
    default:
      return state;
  }
}

/**
 * Creators
 */
export const Creators = {
  setSongRequest: (song, list) => ({
    type: Types.SET_SONG_REQUEST,
    payload: { song, list },
  }),
  setSongSuccess: (song, list) => ({
    type: Types.SET_SONG_SUCCESS,
    payload: { song, list },
  }),
  play: () => ({
    type: Types.PLAY,
  }),
  pause: () => ({
    type: Types.PAUSE,
  }),
  next: () => ({
    type: Types.NEXT,
  }),
  previous: () => ({
    type: Types.PREVIOUS,
  }),
};
