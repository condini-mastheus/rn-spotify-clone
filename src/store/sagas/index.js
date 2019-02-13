import { all, takeLatest } from 'redux-saga/effects';

/**
 * Types
 */
import { Types as AlbumsTypes } from '~/store/ducks/albums';
import { Types as SearchTypes } from '~/store/ducks/search';

/**
 * Sagas
 */
import { getAlbums } from './albums';
import { searchSongsByTerm } from './search';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumsTypes.GET_REQUEST, getAlbums),
    takeLatest(SearchTypes.REQUEST, searchSongsByTerm),
  ]);
}
