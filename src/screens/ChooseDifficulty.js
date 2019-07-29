import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Button } from '../components';

import { mainStyle } from "../assets/base";

const ChooseDifficulty = (props) => {

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Image source={require('../assets/images/urban.png')}
                   style={styles.headerImage}/>

            <Text style={{fontFamily:'TrixiePlain', fontSize:30, paddingBottom: 20}}>Difficulty</Text>

            <View style={styles.buttonContainer}>
                <Button title={'Easy'} onPress={() => props.navigation.navigate('Game')} />
                    <View style={styles.buttonMargin}/>
                <Button title={'Medium'} onPress={() => props.navigation.navigate('Game')} />
                    <View style={styles.buttonMargin}/>
                <Button title={'Hard'} onPress={() => props.navigation.navigate('Game')} />
            </View>
            <View style={styles.buttonMargin}/>
                <Button inverted title={'?'} onPress={() => props.navigation.navigate('Abouts')} />
        </View>
    )
}

export default ChooseDifficulty;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '50%',
        backgroundColor: 'white',
    },
    buttonMargin: {
        padding: 10
    },
   headerImage: {
       // flex: 1,
       width: Dimensions.get('window').width-20,
       height: 200,
       resizeMode: 'contain'}
})