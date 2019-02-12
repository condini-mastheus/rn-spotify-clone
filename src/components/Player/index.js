import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View, Text, TouchableOpacity, SafeAreaView,
} from 'react-native';

import styles from './styles';

const currentSong = {
  title: 'Papercut',
  author: 'Linkin Park',
};

export default class Player extends Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.currentSong}>
          <Text style={styles.title}>{currentSong.title}</Text>
          <Text style={styles.author}>{currentSong.author}</Text>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="skip-previous" size={24} style={styles.controlIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.play} onPress={() => {}}>
            <Icon name="play-circle" size={36} style={styles.controlIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="skip-next" size={24} style={styles.controlIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
