import React, { Component } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default class StarredPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;

    const repository = navigation.getParam('repository');

    return <Browser source={{ uri: repository.html_url }} />;
  }
}
