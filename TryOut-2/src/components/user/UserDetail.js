import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Axios from 'axios';

export default class UserDetail extends Component {
    constructor(props) {
        super(props);

        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    updateUser() {
        let user = this.props.navigation.state.params;
        user.update = true;
        this.props.navigation.navigate('Form', user);
    }

    deleteUser(){
        const userId = this.props.navigation.state.params.id;
        const uri = 'http://192.168.1.14:3000/users/'+userId;
        if(userId){
            Axios({
                method: 'delete',
                url: uri
            }).then((res)=>{
                console.log(res);
                Alert.alert('Deleted!')
                this.props.navigation.goBack();
            }).catch((err)=>{
                console.log(err);
                this.props.navigation.goBack();
            })
        }
    }
  
    render() {
        let {name, phone, picture} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        source={{uri: picture}}
                        style={styles.userPicture}
                    />
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userEmail}>{phone}</Text>
                    <TouchableHighlight onPress={this.updateUser}>
                        <Text style={styles.editButton}>Edit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.deleteUser}>
                        <Text style={styles.deleteButton}>Delete</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 35,
    },
    card: {
        padding: 10,
        flexDirection: 'column',
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: '#e4e4e4',
        borderRadius: 5,
        elevation: 3,
    },
    userPicture: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    userName: {
        marginBottom: 8,
        fontSize: 24,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'right',
    },
    userEmail: {
        marginBottom: 3,
        fontSize: 16,
        textAlign: 'right',
    },
    userTown: {
        marginBottom: 20,
        fontSize: 19,
        textAlign: 'right',
    },
    editButton: {
        marginBottom: 10,
        width: '100%',
        padding: 10,
        backgroundColor: 'orange',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    deleteButton: {
        width: '100%',
        padding: 10,
        backgroundColor: 'orangered',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    }
});