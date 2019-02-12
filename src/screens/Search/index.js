import React, { Component } from 'react';
import { View, TextInput, FlatList } from 'react-native';

import styles from './styles';

import SongItem from '~/components/SongItem';

const songs = [
  {
    id: 0,
    title: 'Papercut',
    author: 'Linkin Park',
    file: 'https://s3-sa-east-1.amazonaws.com/gonative/1.mp3',
  },
  {
    id: 1,
    title: 'One Step Closer',
    author: 'Linkin Park',
    file: 'https://s3-sa-east-1.amazonaws.com/gonative/2.mp3',
  },
  {
    id: 2,
    title: 'With You',
    author: 'Linkin Park',
    file: 'https://s3-sa-east-1.amazonaws.com/gonative/3.mp3',
  },
  {
    id: 3,
    title: 'Points of Authority',
    author: 'Linkin Park',
    file: 'https://s3-sa-east-1.amazonaws.com/gonative/4.mp3',
  },
  {
    id: 4,
    title: 'Crawling',
    author: 'Linkin Park',
    file: 'https://s3-sa-east-1.amazonaws.com/gonative/5.mp3',
  },
];

export default class Search extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search musics"
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
          />
        </View>
        <FlatList
          data={songs}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <SongItem song={item} />}
        />
      </View>
    );
  }
}
