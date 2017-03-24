import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import {TabNavigator} from 'react-navigation';

import Profile from './src/components/profile/Profile';
import User from './src/components/user/User';

const basilischiTask1 = TabNavigator({
  User: {
    screen: User,
    navigationOptions: {
      tabBar: {
        label: 'User'
      }
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBar: {
        label: 'About Me'
      }
    }
  }
})

AppRegistry.registerComponent('basilischiTask1', () => basilischiTask1);
