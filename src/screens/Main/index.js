import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as AlbumsActions } from '~/store/ducks/albums';

import styles from './styles';
import AlbumItem from './components/AlbumItem';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Your Library',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="#fff" />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      isLoading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    }).isRequired,
  };

  componentDidMount() {
    const { getAlbumsRequest } = this.props;

    getAlbumsRequest();
  }

  render() {
    const { navigation, albums } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#222" barStyle="light-content" />

        { albums.isLoading
          ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
          : (
            <FlatList
              data={albums.data}
              keyExtractor={album => String(album.id)}
              renderItem={({ item }) => (
                <AlbumItem album={item} onPress={() => navigation.navigate('Album', { album: item })} />
              )}
            />
          )
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
