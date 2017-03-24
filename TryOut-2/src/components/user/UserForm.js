import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Axios from 'axios';

export default class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state= {
            id: this.props.id,
            name: this.props.name,
            phone: this.props.phone,
            picture: this.props.picture,
        }
        this.uri = 'http://192.168.1.14:3000/users/';
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount(){
        if(this.props.navigation.state.params.update) {
            const {id, name, phone, picture} = this.props.navigation.state.params;
            this.setState({id, name, phone, picture});
        } else {
            this.getNewId();
        }
    }

    getNewId(){
        Axios.get(this.uri)
            .then((response)=>{
                let data = response.data;
                let newId = data.length + 1;
                this.setState({id: newId});
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    createUser(newData) {
        Axios({
            method: 'post',
            url: this.uri,
            data: newData
        }).then((response)=>{
            Alert.alert('User Created');
            this.props.navigation.goBack();
        }).catch((error)=>{
            console.log(error);
            Alert.alert('Error cannot create new user!');
        });
    }

    updateUser(newData) {
        const userUri = this.uri + newData.id;
        Axios({
            method: 'patch',
            url: userUri,
            data: newData
        }).then((response)=>{
            Alert.alert('User Updated');
            this.props.navigation.goBack();
        }).catch((error)=>{
            console.log(error);
            Alert.alert('Error cannot update user!');
        })
    }

    onSubmit(){
        const isUpdate = this.props.navigation.state.params.id;
        const data = this.state;
        console.log('Test a URI: '+this.uri);
        if(isUpdate){
            this.updateUser(data);
        } else {
            this.createUser(data);
        }
    }

    render() {
        const name = this.state.name ? this.state.name : '';
        const phone = this.state.phone ? this.state.phone : '';
        const picture = this.state.picture ? this.state.picture : '';
        return (
            <View style={styles.container}>
                <Text style={styles.header}>User Form</Text>
                <View style={styles.formContainer}>
                    <TextInput ref='nameInput' style={styles.textInput} placeholder="Your name" value={name} onChangeText={(name)=>this.setState({name})} returnKeyType='next' onSubmitEditing={()=>this.refs.phoneInput.focus()}/>
                    <TextInput ref='phonenput' style={styles.textInput} placeholder="Your phone" value={email} keyboardType='email-address' onChangeText={(email)=>this.setState({phone})} returnKeyType='next' onSubmitEditing={()=>this.refs.pictureInput.focus()}/>
                    <TextInput ref='pictureInput' style={styles.textInput} placeholder="Picture Url" value={picture} onChangeText={(picture)=>this.setState({picture})} returnKeyType='done'/>
                    <TouchableHighlight onPress={this.onSubmit}>
                        <Text style={styles.submitButton}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    formContainer: {
        marginTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
    },
    textInput : {
        width: '100%',
        marginBottom: 10,
    },

    submitButton: {
        marginBottom: 10,
        width: '100%',
        padding: 10,
        backgroundColor: 'lightgreen',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
});