/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'albums/GET_REQUEST',
  GET_SUCCESS: 'albums/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

/**
 * Reducer
 */
export default function albums(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    default:
      return state;
  }
}

/**
 * Creators
 */
export const Creators = {
  getAlbumsRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getAlbumsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
