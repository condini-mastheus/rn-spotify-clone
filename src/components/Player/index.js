import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View, Text, TouchableOpacity, SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PlayerActions } from '~/store/ducks/player';

import styles from './styles';

const Player = ({ player, play, pause, next, previous }) => {
  if (player.currentSong.id === undefined) return null;

  const onPressFunction = player.isPaused ? play : pause;
  const icon = player.isPaused ? 'play-circle' : 'pause-circle';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.currentSong}>
        <Text style={styles.title}>{player.currentSong.title}</Text>
        <Text style={styles.author}>{player.currentSong.author}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity onPress={previous}>
          <Icon name="skip-previous" size={24} style={styles.controlIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.play} onPress={onPressFunction}>
          <Icon name={icon} size={36} style={styles.controlIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={next}>
          <Icon name="skip-next" size={24} style={styles.controlIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      id: PropTypes.number,
      isPaused: PropTypes.bool,
    }),
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Player);
