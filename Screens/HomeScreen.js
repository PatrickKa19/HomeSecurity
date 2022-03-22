import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, LayoutAnimation, Pressable } from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.video}>
                    <Text style={styles.textVideo}>Hier kommt das Video hin</Text>
                </View>

                <View style={styles.login} >
                    <Pressable style={styles.buttonPrimary}
                        onPress={() => this.props.navigation.navigate('Logins')}>
                        <Text style={styles.text}>Anmeldungen</Text>
                    </Pressable>
                </View>

                <View style={styles.logout} >
                    <Pressable style={styles.buttonSecondary}
                        onPress={() => this.props.navigation.navigate('Anmelden')}>
                        <Text style={styles.textSecondary}>Abmelden</Text>
                    </Pressable>
                </View>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    video: {
        flex: 2,
        backgroundColor: 'black',
    },
    login: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        marginBottom: 7.5
    },
    logout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        marginTop: 7.5
    },
    buttonPrimary: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#385170',
    },
    buttonSecondary: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#e0ebeb',
    },
    text: {
        fontSize: 40,
        color: '#fff',
    },
    textSecondary: {
        fontSize: 40,
        color: '#000',
    },
    textVideo: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'center',
    },
});