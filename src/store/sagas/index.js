import { all, takeLatest } from 'redux-saga/effects';

/**
 * Types
 */
import { Types as AlbumsTypes } from '~/store/ducks/albums';
import { Types as SearchTypes } from '~/store/ducks/search';
import { Types as PlayerTypes } from '~/store/ducks/player';

/**
 * Sagas
 */
import { getAlbums } from './albums';
import { searchSongsByTerm } from './search';
import { setSong, pause, play, next, previous } from './player';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumsTypes.GET_REQUEST, getAlbums),
    takeLatest(SearchTypes.REQUEST, searchSongsByTerm),
    takeLatest(PlayerTypes.SET_SONG_REQUEST, setSong),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.PREVIOUS, previous),
  ]);
}
