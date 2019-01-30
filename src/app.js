import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Header } from './components/common';
import firebase from '@firebase/app';
import '@firebase/auth';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBQ9jndGCOFX8YOab7PSMh6IRhxJWKZqZ0",
            authDomain: "authentication-a13ad.firebaseapp.com",
            databaseURL: "https://authentication-a13ad.firebaseio.com",
            projectId: "authentication-a13ad",
            storageBucket: "authentication-a13ad.appspot.com",
            messagingSenderId: "178685403649"
        });
    }
    render() {
        return(
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;