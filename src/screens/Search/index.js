import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { debounce } from 'lodash';

import { Creators as SearchActions } from '~/store/ducks/search';

import styles from './styles';

import SongItem from '~/components/SongItem';

class Search extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    search: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
      isLoading: PropTypes.bool,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.searchRequest = debounce(this.props.searchRequest, 500);
  }

  state = {
    searchInput: '',
  };

  handleSearch = (searchInput) => {
    this.setState({ searchInput });
    // this.props.searchRequest(searchInput);

    this.searchRequest(searchInput);
  }

  render() {
    const { search } = this.props;
    const { searchInput } = this.state;
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
            value={searchInput}
            returnKeyType="search"
            onChangeText={this.handleSearch}
          />
        </View>

        {search.isLoading 
          && (
            <ActivityIndicator size="small" color="#999" style={styles.loading} />
          )}

        <FlatList
          data={search.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <SongItem song={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
