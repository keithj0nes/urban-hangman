import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {mainStyle} from "../assets/base";
import { getDimensions } from "../helpers";

const Letter = ({title, onPress, disabled, correctGuess}) => {

    if(disabled){
        return (
            <View style={[styles.container, {backgroundColor: correctGuess ? 'green' : 'red'}]}>
                <Text style={styles.letterText}>{title.toUpperCase()}</Text>
            </View>
        )
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.letterText}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

export default Letter;

const styles = StyleSheet.create({
    container: {
        padding: getDimensions() === "iPhone5s" ? 5 : 8,
        backgroundColor: 'black',
        margin: 3,
        marginVertical: getDimensions() === "iPhone5s" ? 7 : 7
    },
    letterText: {
        fontFamily: mainStyle.mainFont,
        fontSize: 25,
        color: mainStyle.white
    }
})