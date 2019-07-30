import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Letter, GuessLetter } from '../components';
import {mainStyle} from "../assets/base";
import words from '../assets/words.json'

class Game extends Component {

    state = {
        // letterRow1: 'QWERTYUIOP',
        // letterRow2: 'ASDFGHJKL',
        // letterRow3: 'ZXCVBNM',
        letterRow1: 'qwertyuiop',
        letterRow2: 'asdfghjkl',
        letterRow3: 'zxcvbnm',
        currentWord: '',
        userGuess: []
    }

    componentDidMount() {

        //get word
        // render word to words view (as this.state.currentWord)
        const randomNumber = Math.floor(Math.random() * words.length )
        const currentWord = words[randomNumber]
        this.setState({
            currentWord
        })
    }

    handleUserGuess = (letter) => {
        var newState = [...this.state.userGuess, letter]

        this.setState({userGuess: newState})
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.draw}>
                    <View style={styles.backButton}>
                        <Button title={'Back'} onPress={() => this.props.navigation.goBack()}/>
                    </View>
                </View>




                <View style={styles.words}>
                    {this.state.currentWord.split('').map((letter, index) => {

                        const ourState = [...this.state.userGuess];
                        const isLetterGuessed = ourState.includes(letter)

                        return <GuessLetter key={index} title={letter} isHidden={!isLetterGuessed} />

                    })}
                </View>





                <View style={styles.letters}>
                    <View style={styles.letterRow}>
                        {this.state.letterRow1.split('').map((letter, index) => {

                            const ourState = [...this.state.userGuess];
                            const isLetterGuessed = ourState.includes(letter)
                            const correctGuess = this.state.currentWord.includes(letter)

                            return <Letter key={letter} onPress={() => this.handleUserGuess(letter)} correctGuess={correctGuess} disabled={isLetterGuessed} title={letter} />
                        })}
                    </View>

                    <View style={styles.letterRow}>

                        {this.state.letterRow2.split('').map((letter, index) => {

                            const ourState = [...this.state.userGuess];
                            const isLetterGuessed = ourState.includes(letter)
                            const correctGuess = this.state.currentWord.includes(letter)


                            return <Letter key={letter} onPress={() => this.handleUserGuess(letter)} correctGuess={correctGuess} disabled={isLetterGuessed} title={letter} />
                        })}
                    </View>

                    <View style={styles.letterRow}>

                        {this.state.letterRow3.split('').map((letter, index) => {

                            const ourState = [...this.state.userGuess];
                            const isLetterGuessed = ourState.includes(letter)
                            const correctGuess = this.state.currentWord.includes(letter)

                            return <Letter key={letter} onPress={() => this.handleUserGuess(letter)} correctGuess={correctGuess} disabled={isLetterGuessed} title={letter} />
                        })}
                    </View>

                </View>
            </View>
        )
    }

}

export default Game;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    draw: {
        backgroundColor: 'green',
        flex: 3,
        // height: 100
    },
    words: {
        backgroundColor: mainStyle.red,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    letters: {
        backgroundColor: 'white',
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    letterRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    backButton: {
        width: 100,
        position: 'absolute',
        top: 10,
        left: 10
    }
})