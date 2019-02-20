import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import styles from './styles';

const SongItem = ({ song, player, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.info}>
      <Text style={[styles.title, player.currentSong.id === song.id ? styles.active : {}]}>
        {song.title}
      </Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>
    {player.loadingId === song.id ? (
      <ActivityIndicator size={24} color="#999" />
    ) : (
      <Icon name="play-circle-outline" size={24} style={styles.play} />
    )}
  </TouchableOpacity>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  player: PropTypes.shape({
    loadingId: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(SongItem);
