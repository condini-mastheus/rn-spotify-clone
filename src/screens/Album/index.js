import React, { Component } from 'react';

import { View } from 'react-native';

// import styles from './styles';

export default class Album extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.album.title,
  });

  state = {};

  render() {
    return <View />;
  }
}
