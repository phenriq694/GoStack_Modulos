import React, { Component } from 'react';
import { View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default class StarredPage extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    repository: '',
  };

  componentDidMount() {
    const { navigation } = this.props;

    const repo = navigation.getParam('repository');

    this.setState({ repository: repo });

    console.tron.log(repo.html_url);
  }

  render() {
    const { repository } = this.state;

    return <Browser source={{ uri: repository.html_url }} />;
  }
}
