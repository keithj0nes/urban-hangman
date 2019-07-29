import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {mainStyle} from "../assets/base";

const GuessLetter = ({title, isHidden}) => {
    if (title === ' '){
        var noBorder = {
            borderBottomWidth: 0
        }
    }

    //this adds a View OVER the text to fake 'hiding' it
    const renderHidden = () => <View style={styles.hidden} />


    return (
        <View style={[styles.container, noBorder]}>
            {isHidden && renderHidden()}
            <Text style={styles.letterText}>{title.toUpperCase()}</Text>
        </View>
    )
}

export default GuessLetter;

const styles = StyleSheet.create({
    container: {

        padding: 8,
        // backgroundColor: 'yellow',
        margin: 3,
        marginVertical: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 5
    },
    letterText: {
        fontFamily: mainStyle.mainFont,
        fontSize: 25
    },
    hidden: {
        position: 'absolute',
        zIndex: 100,
        backgroundColor: mainStyle.white,
        height: '50%',
        padding: 8,

        width: '213%'
    }
})