import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as SearchActions } from '~/store/ducks/search';

export function* searchSongsByTerm(action) {
  try {
    const { data } = yield call(api.get, `/songs?q=${action.payload.term}`);

    yield put(SearchActions.searchSuccess(data));
  } catch (error) {
    console.tron.error(error);
  }
}
