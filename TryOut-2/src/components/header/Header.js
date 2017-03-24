import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Alert,
    StyleSheet,
} from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../images/refactory--logo.png')} />
                <TouchableHighlight>
                    <Text>About Me</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    logo : {
        width: 110,
        height: 40,
    }
})