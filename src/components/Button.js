import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { mainStyle } from "../assets/base";

const Button = ({title, onPress, inverted}) => {

    return (
        <TouchableOpacity style={[styles.container, inverted && {backgroundColor: mainStyle.white}]} onPress={onPress}>
            <Text style={[styles.buttonText, inverted && {color: 'black'}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: mainStyle.mainFont,
        fontSize: 30,
        color: mainStyle.white
    }
})