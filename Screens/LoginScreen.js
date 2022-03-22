import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, LayoutAnimation, Pressable, Button } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            passwd: ''
        }
    }

    login = () => {
        const { email, passwd } = this.state;
        if (email == "admin" && passwd == "admin") {
            this.props.navigation.navigate('Home')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textOben}> Anmelden </Text>
                <View style={styles.textInput1}>
                    <TextInput
                        placeholder="Anmeldename"
                        onChangeText={
                            email => this.setState({ email })} />

                </View>
                <View style={styles.textInput2}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Passwort"
                        onChangeText={
                            passwd => this.setState({ passwd })}
                    />
                </View>
                <TouchableOpacity style={styles.buttonPrimary}
                    onPress={this.login}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </View >
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textOben: {
        textAlign: 'center',
        fontSize: 40,
        color: '#000',
    },
    textInput1: {
        width: '70%',
        height: '10%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginBottom: 10,
        marginTop: 50,
    },
    textInput2: {
        width: '70%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginBottom: 70
    },
    buttonPrimary: {
        width: '50%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#385170',
    },

    text: {
        fontSize: 20,
        color: '#fff',
    },
    textSecondary: {
        fontSize: 40,
        color: '#000',
    }
});