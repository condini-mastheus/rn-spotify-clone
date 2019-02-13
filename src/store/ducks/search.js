/**
 * Types
 */
export const Types = {
  REQUEST: 'search/REQUEST',
  SUCCESS: 'search/SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

/**
 * Reducer
 */
export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.SUCCESS:
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
  searchRequest: term => ({
    type: Types.REQUEST,
    payload: { term },
  }),

  searchSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
};
