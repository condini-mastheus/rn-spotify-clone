import React, { Component } from 'react';

import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';

import SongList from '~/components/SongList';

export default class Album extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.album.title,
  });

  state = {};

  render() {
    const { album } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.thumbnail}
          source={{ uri: album.thumbnail }}
          blurRadius={0.5}
        >
          <View style={styles.thumbnailContent}>
            <Text style={styles.title}>{album.title}</Text>
            <Text style={styles.author}>{album.author}</Text>
          </View>
        </ImageBackground>

        <SongList data={album.songs} />
      </View>
    );
  }
}
