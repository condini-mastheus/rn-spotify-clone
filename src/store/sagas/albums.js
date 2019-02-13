import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as AlbumsActions } from '~/store/ducks/albums';

export function* getAlbums() {
  try {
    const { data } = yield call(api.get, '/albums');

    yield put(AlbumsActions.getAlbumsSuccess(data));
  } catch (error) {
    console.tron.error(error);
  }
}
