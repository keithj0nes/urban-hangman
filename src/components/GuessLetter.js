import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {mainStyle} from "../assets/base";
import { getDimensions } from "../helpers";

const GuessLetter = ({title, isHidden}) => {
    if (title === ' '){
        var noBorder = {
            borderBottomWidth: 0
        }
    }

    // console.log(getDimensions(), "cool")
    //this adds a View OVER the text to fake 'hiding' it
    const renderHidden = () => <View style={styles.hidden} />


    return (
        <View style={[styles.container, noBorder]}>
            {/*{isHidden && renderHidden()}*/}
            <Text style={styles.letterText}>{title.toUpperCase()}</Text>
        </View>
    )
}

export default GuessLetter;

const styles = StyleSheet.create({
    container: {

        // padding: 8,
        padding: getDimensions() === "iPhone5s" ? 3 : 5,
        backgroundColor: 'yellow',
        margin: 3,
        marginVertical: 3,
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
        backgroundColor: 'pink',
        height: '50%',
        padding: 8,

        width: '215%'
    }
})