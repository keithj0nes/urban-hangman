import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {mainStyle} from "../assets/base";

const Letter = ({title, onPress, disabled}) => {

    if(disabled){
        return (
            <View style={[styles.container, {backgroundColor: 'red'}]}>
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
        padding: 8,
        backgroundColor: 'black',
        margin: 3,
        marginVertical: 10
    },
    letterText: {
        fontFamily: mainStyle.mainFont,
        fontSize: 25,
        color: mainStyle.white
    }
})