import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation'

import UserList from './UserList';
import UserDetail from './UserDetail';
import UserForm from './UserForm';

const User = StackNavigator({
    List: {
        screen: UserList,
        navigationOptions: {
            header: ({state, navigate}) => {
                let right = (
                    <Button
                        title='Create New'
                        onPress={()=> navigate('Form', {update: false})}
                    />
                );

                return {right};
            },
            title: 'List of user'
        }
    },
    Detail: {
        screen: UserDetail,
        navigationOptions:{
            title: ({state}) => `${state.params.name} Profile`,
        }
    },
    Form: {
        screen: UserForm,
        navigationOptions: {
            title: ({state}) => {
                if(state.params.update){
                    return `Update ${state.params.name} Profile`
                } else {
                    return 'Create New Profile'
                }
            },
        }
    }
});

export default User;
