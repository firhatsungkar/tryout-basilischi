import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

export default class Profile extends Component {
  render() {
    const photo = require('../../images/me--photo.jpeg');
    const logo = require('../../images/refactory--logo.png');
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.logo} source={logo} />        
          <Image style={styles.photo} source={photo} />
          <Text style={styles.name}>Muhamad Firhat</Text>
          <Text style={styles.class}>#basilischi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    marginTop: 100,
    backgroundColor: "#e4e4e4",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  logo: {
    width: 124,
    height: 50,
    marginBottom: 40,
  },
  name: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    borderBottomColor: '#333333',
    borderBottomWidth: 3,
  },
  class: {
    fontSize: 15,
  }
});
