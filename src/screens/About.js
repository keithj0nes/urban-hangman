import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import { Button, Letter, GuessLetter } from '../components';
import {mainStyle} from "../assets/base";

const About = (props) => {

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <Text style={{fontFamily:'TrixiePlain', fontSize:30, paddingBottom: 20}}>Difficulty</Text>

            <Button title={'Back'} onPress={() => props.navigation.goBack()}/>
        </View>
    )
}

export default About;

const styles = StyleSheet.create({

})