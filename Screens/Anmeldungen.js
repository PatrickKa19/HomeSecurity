import React, { Component } from 'react';
import { ScrollView, Image, Text, Button, StyleSheet, View, TextInput } from 'react-native';

export default class Anmeldungen extends Component {
    onPressButton() {
        alert('Hier kommt dann das Video')
    }

    constructor(props) {
        super(props);
        this.state = {
            Name0: '', Name1: '', Name2: '', Name3: '', Name4: '', Name5: '', Name6: '', Name7: '', Name8: '', Name9: '',
            Datum0: '', Datum1: '', Datum2: '', Datum3: '', Datum4: '', Datum5: '', Datum6: '', Datum7: '', Datum8: '', Datum9: '',
            Zeit0: '', Zeit1: '', Zeit2: '', Zeit3: '', Zeit4: '', Zeit5: '', Zeit6: '', Zeit7: '', Zeit8: '', Zeit9: ''
        }
    }

    NeuLaden = () => {
        var Schluesel = "fdcgDSWcPxNEcYFhm9PAS4mhgzP2HjNqCzvkYX9Y4sPccsP4yH3o8ujQvvYm9ez6Jtyv9abxQxMJfHfRMiLn3r3Pns9EKmCQH9zMtfWVLVAcnrRLQrcfjZPqUhS2HTTJ";
        var SearchAPIURL = "https://anatahr.de/select.php";
        var i = 0;
        var header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        var Data = {
            Schluesel: Schluesel
        };

        fetch(
            SearchAPIURL,
            {
                method: 'POST',
                headers: header,
                body: JSON.stringify(Data)
            }
        )

            .then((response) => response.json())
            .then((response) => {
                for (i = 0; i < 10; i++) {
                    this.setState({ ["Name" + i]: response[i].Name });
                    this.setState({ ["Datum" + i]: response[i].Datum });
                    this.setState({ ["Zeit" + i]: response[i].Zeit });
                };

            })
            .catch((error) => {
                alert("Error" + error);
            })
    }

    render() {
        return (
            <ScrollView style={styles.scrollStyle}>
                <View>
                    <Button
                        title={"Neu Laden"}
                        onPress={this.NeuLaden}
                    />
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name0}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum0.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit0.toString()}
                        />
                    </View>
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name1}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum1.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit1.toString()}
                        />
                    </View>
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name2}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum2.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit2.toString()}
                        />
                    </View>
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name3}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum3.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit3.toString()}
                        />
                    </View>
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name4}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum4.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit4.toString()}
                        />
                    </View>
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name5}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum5.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit5.toString()}
                        />
                    </View>
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name6}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum6.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit6.toString()}
                        />
                    </View>
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name7}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum7.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit7.toString()}
                        />
                    </View>
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name8}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum8.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit8.toString()}
                        />
                    </View>
                    <View style={styles.viewStyle}>

                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Name9}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Datum9.toString()}
                        />
                        <TextInput
                            style={styles.txtStyle}
                            value={this.state.Zeit9.toString()}
                        />
                    </View>
                </View>

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    scrollStyle:
    {
        backgroundColor: '#cccccc'

    },
    viewStyle:
    {
        flex: 1,
        padding: 20,
        margin: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#cbf5c6'
    },
    txtStyle:
    {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20
    }
});