import { put, call, select } from 'redux-saga/effects';
import RNSound from 'react-native-sound/sound';

import { Creators as PlayerActions } from '~/store/ducks/player';

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (error) {
    console.tron.error('2', error);
  }
}

export function* pause() {
  try {
    yield call(Sound.pause);
  } catch (error) {
    console.tron.error('3', error);
  }
}

export function* setSong(action) {
  try {
    if (Sound.isLoaded()) {
      yield call(Sound.release);
    }

    const { song, list } = action.payload;
    yield call(Sound.init, song.file);
    yield call(play);

    yield put(PlayerActions.setSongSuccess(song, list));
  } catch (error) {
    console.tron.error('1', error);
  }
}

export function* next() {
  try {
    const player = yield select(state => state.player);

    const currentIndex = player.playlist.findIndex(song => song.id === player.currentSong.id);

    const nextSong = player.playlist[currentIndex + 1];

    if (nextSong) {
      yield put(PlayerActions.setSongRequest(nextSong, player.playlist));
    }
  } catch (error) {
    console.tron.error(error);
  }
}

export function* previous() {
  try {
    const player = yield select(state => state.player);

    const currentIndex = player.playlist.findIndex(song => song.id === player.currentSong.id);

    const previousSong = player.playlist[currentIndex - 1];

    if (previousSong) {
      yield put(PlayerActions.setSongRequest(previousSong, player.playlist));
    }
  } catch (error) {
    console.tron.error(error);
  }
}
