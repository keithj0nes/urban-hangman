import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Letter, GuessLetter } from '../components';
import {mainStyle} from "../assets/base";
import words from '../assets/words.json'
import { AnimatedSVGPath } from 'react-native-svg-animations';


// const d = 'M366.2,204.2c-9.8,0-15-5.6-15-15.1V77.2h-85v28h19.5c9.8,0,8.5,2.1,8.5,11.6v72.4c0,9.5,0.5,15.1-9.3,15.1H277h-20.7c-8.5,0-14.2-4.1-14.2-12.9V52.4c0-8.5,5.7-12.3,14.2-12.3h18.8v-28h-127v28h18.1c8.5,0,9.9,2.1,9.9,8.9v56.1h-75V53.4c0-11.5,8.6-13.3,17-13.3h11v-28H2.2v28h26c8.5,0,12,2.1,12,7.9v142.2c0,8.5-3.6,13.9-12,13.9h-21v33h122v-33h-11c-8.5,0-17-4.1-17-12.2v-57.8h75v58.4c0,9.1-1.4,11.6-9.9,11.6h-18.1v33h122.9h5.9h102.2v-33H366.2z';


// const ds = [
//     'M 50 280 L 250 280',
//     'M 200 280 L 200 50',
//     'M 200 50 L 100 50',
//     'M 160 50 L 200 90',
//     'M 100 50 L 100 80',
//     'M 85 95 A 15 15 0 1 0 85 94.9',
//     'M 100 110 L 95 175',
//     'M 98 130 A 80 80 1 0 0 90 168',
//     'M 99 130 A 80 80 0 0 1 107 170',
//     'M 95 175 A 80 72 1 0 0 90 228',
//     'M 95 175 A 40 60 0 0 1 92 238'
// ];


const easy = [ 'M 50 280 L 250 280 M 200 280 L 200 50 M 200 50 L 100 50 M 160 50 L 200 90 M 100 50 L 100 80',
    'M 85 95 A 15 15 0 1 0 85 94.9',
    'M 100 110 L 95 175',
    'M 98 130 A 80 80 1 0 0 90 168',
    'M 99 130 A 80 80 0 0 1 107 170',
    'M 95 175 A 80 72 1 0 0 90 228',
    'M 95 175 A 40 60 0 0 1 92 238'
];

const medium = [
    'M 50 280 L 250 280 M 200 280 L 200 50 M 200 50 L 100 50 M 160 50 L 200 90 M 100 50 L 100 80 M 85 95 A 15 15 0 1 0 85 94.9',
    'M 100 110 L 95 175 M 98 130 A 80 80 1 0 0 90 168',
    'M 99 130 A 80 80 0 0 1 107 170',
    'M 95 175 A 80 72 1 0 0 90 228',
    'M 95 175 A 40 60 0 0 1 92 238'
];



const hard = [
    'M 50 280 L 250 280 M 200 280 L 200 50 M 200 50 L 100 50 M 160 50 L 200 90 M 100 50 L 100 80 M 85 95 A 15 15 0 1 0 85 94.9',
    'M 100 110 L 95 175 M 98 130 A 80 80 1 0 0 90 168 M 99 130 A 80 80 0 0 1 107 170',
    'M 95 175 A 80 72 1 0 0 90 228 M 95 175 A 40 60 0 0 1 92 238'
];




// const d = `M 10,30
// A 20,20 0,0,1 50,30
// A 20,20 0,0,1 90,30
// Q 90,60 50,90
// Q 10,60 10,30 z`

// const d = "M8.69,45.18c2.47,4.72,7.15,7.81,12.48,9.41.52,4.17,1,8.34,1.28,12.54h0A7.72,7.72,0,0,0,26,73.26a50.69,50.69,0,0,0-.36,22.92,3.67,3.67,0,0,0,7.18-1.56v-.07a43.32,43.32,0,0,1,1-21.77,6.59,6.59,0,0,0,2.84-5.65c-.3-4.57-.85-9.1-1.41-13.64-.48-3.84-2.85-7.11-7.06-7.11a7.61,7.61,0,0,0-4.64,1.79C19.1,47,14.89,44.57,13.87,40c0-.34,0-.69,0-1.08l-1.18-3a5,5,0,0,1-.58-.21l0,.09c-2.06-1.37-5.5-.5-5.3,2.66a16.53,16.53,0,0,0,1.29,5.54" +
//     "M24.13,30.64A7.29,7.29,0,1,1,16.89,38v0A7.26,7.26,0,0,1,24.13,30.64" + //head
//      "Zm-2.4,36.49a7.69,7.69,0,0,0,3.51,6.12,50.6,50.6,0,0,0-.35,22.93,3.67,3.67,0,1,0,7.17-1.56v-.06a43.36,43.36,0,0,1,1-21.78,6.59,6.59,0,0,0,2.84-5.65c-.3-4.57-.85-9.1-1.41-13.64-.48-3.84-2.85-7.11-7.06-7.11a7.61,7.61,0,0,0-4.64,1.79C18.38,47,14.17,44.57,13.15,40a9.5,9.5,0,0,0,0-1.08c-.07-3.07-1.55-5.3-3-7.46s-2.8-4.24-2.76-7.08H7.38v-.78l-.76.77H6.39v.22l-.65-.19,1.64-1.65v-1.6L5.58,23v1.4l-.1,0a6.54,6.54,0,0,1-2.23,3.1A8.44,8.44,0,0,0,1,30.21C-.73,33.87-.15,39.53,2.26,42.34A8.3,8.3,0,0,0,8,45.18c2.47,4.72,7.15,7.81,12.48,9.41.52,4.17,1,8.35,1.28,12.54Z" +
//      "M6.16,38.53a16.53,16.53,0,0,0,1.29,5.54,7.46,7.46,0,0,1-4.4-2.43C.92,39.17.41,33.93,2,30.66a7.45,7.45,0,0,1,2-2.41A7.77,7.77,0,0,0,6.38,25h0c.14,2.87,1.55,5,2.92,7.07a21.44,21.44,0,0,1,2.14,3.79C9.4,34.5,6,35.37,6.16,38.53Z" +
//      "M7.38,19.15,5.58,21v1.18l1.8-1.81Zm0-1.57h-.5V0h-.8V17.58h-.5V20.1l1.8-1.8Z" + //longer rope
//     "M44.59,72.26c-.26.57-6,13.25-6.74,26.8H15V122h3v-9.23H37.76V122h3V102.06c0-14,6.49-28.4,6.56-28.55Zm-6.83,37.53H18v-7.73H37.76Z"; //chair

// const d = "M 10 10 H 90 V 90 H 10 L 10 10"

// const d = 'M255.9 0c-84.18 0-152.56 70.54-152.56 157.13 0 18 7.86 38.9 19 63.68s26.05 52.81 41.9 80.72c31.7 55.81 67.17 112 80.95 138.72a12 12 0 0 0 21.52 0c13.81-26.69 49.24-82.9 80.95-138.72 15.85-27.91 30.71-55.94 41.9-80.72s19-45.65 19-63.68C408.66 70.54 340.14 0 255.9 0zm0 77c40.78 0 73.71 33.69 73.71 75.63s-32.93 75.63-73.71 75.63-73.52-33.69-73.52-75.63S215.2 77 255.9 77z'

// var ds = [
//     `M987.572,1110.571
//     c0,104.54-84.746,189.286-189.286,189.286c-104.54,0-189.286-84.746-189.286-189.286c0-104.54,84.746-189.286,189.286-189.286
//     C902.826,921.286,987.572,1006.032,987.572,1110.571z`,
//     "M798.286,1299.857v395.188",
//     "M798.286,1484.411l263.228-139.651",
//     "M798.286,1676.138l214.585,247.726",
//     "M798.286,1484.411L535.059,1344.76",
//     "M583.701,1923.863l214.585-247.726'
// ]

class Medium extends Component {

    state = {
        // letterRow1: 'QWERTYUIOP',
        // letterRow2: 'ASDFGHJKL',
        // letterRow3: 'ZXCVBNM',
        letterRow1: 'qwertyuiop',
        letterRow2: 'asdfghjkl',
        letterRow3: 'zxcvbnm',
        currentWord: '',
        userGuess: [],
        wrongGuess: []
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

        this.setState({userGuess: newState}, () => {
            const correctGuess = this.state.currentWord.includes(letter)
            if (!correctGuess) {
                //fire draw function here
                this.setState({wrongGuess: [...this.state.wrongGuess, true]}, () => {
                    if (this.state.wrongGuess.length >= 3) {
                        alert( this.state.currentWord)
                    }
                })
            }
            // console.log(correctGuess, "Correct Guess")
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.draw}>



                    {/*<View style={{backgroundColor:"yellow", position: "absolute", top: 0, right: 0, bottom: 0, left: 0, paddingRight:100, paddingLeft:100}}>*/}
                    {/*    /!*<AnimatedSVGPaths strokeColor={"black"}*!/*/}
                    {/*    /!*                 duration={1000}*!/*/}
                    {/*    /!*                 strokeWidth={0.5}*!/*/}
                    {/*    /!*                 height={400}*!/*/}
                    {/*    /!*                 width={400}*!/*/}
                    {/*    /!*                 scale={1}*!/*/}
                    {/*    /!*                 delay={100}*!/*/}
                    {/*    /!*                 fill={'black'}*!/*/}
                    {/*    /!*                 ds={ds}*!/*/}
                    {/*    /!*                 loop={false}/>*!/*/}

                    {/*    { this.state.wrongGuess.length >= 1 && (*/}
                    {/*        <AnimatedSVGPath strokeColor={"black"}*/}
                    {/*                         duration={1000}*/}
                    {/*                         strokeWidth={0.5}*/}
                    {/*                         height={400}*/}
                    {/*                         width={400}*/}
                    {/*                         scale={1}*/}
                    {/*                         delay={100}*/}
                    {/*                         fill={'black'}*/}
                    {/*                         d={easy[0]}*/}
                    {/*                         loop={false}/>*/}
                    {/*    )}*/}
                    {/*</View>*/}
                    {/*<View style={{backgroundColor: "orange", position: "absolute", top: 0, right: 0, opacity: .3, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>*/}
                    {/*    { this.state.wrongGuess.length >= 2 && (*/}
                    {/*        <AnimatedSVGPath strokeColor={"black"}*/}
                    {/*                         duration={1000}*/}
                    {/*                         strokeWidth={0.5}*/}
                    {/*                         height={400}*/}
                    {/*                         width={400}*/}
                    {/*                         scale={1}*/}
                    {/*                         delay={100}*/}
                    {/*                         fill={'black'}*/}
                    {/*                         d={easy[1]}*/}
                    {/*                         loop={false}/>*/}
                    {/*    )}*/}
                    {/*</View>*/}
                    {/*<View style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>*/}
                    {/*    { this.state.wrongGuess.length >= 3 && (*/}
                    {/*        <AnimatedSVGPath strokeColor={"black"}*/}
                    {/*                         duration={1000}*/}
                    {/*                         strokeWidth={0.5}*/}
                    {/*                         height={400}*/}
                    {/*                         width={400}*/}
                    {/*                         scale={1}*/}
                    {/*                         delay={100}*/}
                    {/*                         fill={'black'}*/}
                    {/*                         d={easy[2]}*/}
                    {/*                         loop={false}/>*/}
                    {/*    )}*/}


                    {/*</View>*/}
                    {/*<View style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>*/}
                    {/*    { this.state.wrongGuess.length >= 4 && (*/}
                    {/*        <AnimatedSVGPath strokeColor={"black"}*/}
                    {/*                         duration={1000}*/}
                    {/*                         strokeWidth={0.5}*/}
                    {/*                         height={400}*/}
                    {/*                         width={400}*/}
                    {/*                         scale={1}*/}
                    {/*                         delay={100}*/}
                    {/*                         fill={'black'}*/}
                    {/*                         d={easy[3]}*/}
                    {/*                         loop={false}/>*/}
                    {/*    )}*/}


                    {/*</View>*/}
                    {/*<View style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>*/}
                    {/*    { this.state.wrongGuess.length >= 5 && (*/}
                    {/*        <AnimatedSVGPath strokeColor={"black"}*/}
                    {/*                         duration={1000}*/}
                    {/*                         strokeWidth={0.5}*/}
                    {/*                         height={400}*/}
                    {/*                         width={400}*/}
                    {/*                         scale={1}*/}
                    {/*                         delay={100}*/}
                    {/*                         fill={'black'}*/}
                    {/*                         d={easy[4]}*/}
                    {/*                         loop={false}/>*/}
                    {/*    )}*/}


                    {/*</View>*/}
                    {/*<View style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>*/}
                    {/*    { this.state.wrongGuess.length >= 6 && (*/}
                    {/*        <AnimatedSVGPath strokeColor={"black"}*/}
                    {/*                         duration={1000}*/}
                    {/*                         strokeWidth={0.5}*/}
                    {/*                         height={400}*/}
                    {/*                         width={400}*/}
                    {/*                         scale={1}*/}
                    {/*                         delay={100}*/}
                    {/*                         fill={'black'}*/}
                    {/*                         d={easy[5]}*/}
                    {/*                         loop={false}/>*/}
                    {/*    )}*/}


                    {/*</View>*/}
                    {/*<View style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>*/}
                    {/*    { this.state.wrongGuess.length >= 7 && (*/}
                    {/*        <AnimatedSVGPath strokeColor={"black"}*/}
                    {/*                         duration={1000}*/}
                    {/*                         strokeWidth={0.5}*/}
                    {/*                         height={400}*/}
                    {/*                         width={400}*/}
                    {/*                         scale={1}*/}
                    {/*                         delay={100}*/}
                    {/*                         fill={'black'}*/}
                    {/*                         d={easy[6]}*/}
                    {/*                         loop={false}/>*/}
                    {/*    )}*/}


                    {/*</View>*/}









                    <View style={{backgroundColor:"yellow", position: "absolute", top: 0, right: 0, bottom: 0, left: 0, paddingRight:100, paddingLeft:100}}>
                        {/*<AnimatedSVGPaths strokeColor={"black"}*/}
                        {/*                 duration={1000}*/}
                        {/*                 strokeWidth={0.5}*/}
                        {/*                 height={400}*/}
                        {/*                 width={400}*/}
                        {/*                 scale={1}*/}
                        {/*                 delay={100}*/}
                        {/*                 fill={'black'}*/}
                        {/*                 ds={ds}*/}
                        {/*                 loop={false}/>*/}

                        { this.state.wrongGuess.length >= 1 && (
                            <AnimatedSVGPath strokeColor={"black"}
                                             duration={1000}
                                             strokeWidth={0.5}
                                             height={400}
                                             width={400}
                                             scale={1}
                                             delay={100}
                                             fill={'black'}
                                             d={hard[0]}
                                             loop={false}/>
                        )}
                    </View>
                    <View style={{backgroundColor: "orange", position: "absolute", top: 0, right: 0, opacity: .3, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>
                        { this.state.wrongGuess.length >= 2 && (
                            <AnimatedSVGPath strokeColor={"black"}
                                             duration={1000}
                                             strokeWidth={0.5}
                                             height={400}
                                             width={400}
                                             scale={1}
                                             delay={100}
                                             fill={'black'}
                                             d={hard[1]}
                                             loop={false}/>
                        )}
                    </View>
                    <View style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>
                        { this.state.wrongGuess.length >= 3 && (
                            <AnimatedSVGPath strokeColor={"black"}
                                             duration={1000}
                                             strokeWidth={0.5}
                                             height={400}
                                             width={400}
                                             scale={1}
                                             delay={100}
                                             fill={'black'}
                                             d={hard[2]}
                                             loop={false}/>
                        )}


                    </View>
                    {/*<View style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>*/}
                    {/*    { this.state.wrongGuess.length >= 4 && (*/}
                    {/*        <AnimatedSVGPath strokeColor={"black"}*/}
                    {/*                         duration={1000}*/}
                    {/*                         strokeWidth={0.5}*/}
                    {/*                         height={400}*/}
                    {/*                         width={400}*/}
                    {/*                         scale={1}*/}
                    {/*                         delay={100}*/}
                    {/*                         fill={'black'}*/}
                    {/*                         d={medium[3]}*/}
                    {/*                         loop={false}/>*/}
                    {/*    )}*/}


                    {/*</View>*/}
                    {/*<View style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0,  paddingRight:100, paddingLeft:100}}>*/}
                    {/*    { this.state.wrongGuess.length >= 5 && (*/}
                    {/*        <AnimatedSVGPath strokeColor={"black"}*/}
                    {/*                         duration={1000}*/}
                    {/*                         strokeWidth={0.5}*/}
                    {/*                         height={400}*/}
                    {/*                         width={400}*/}
                    {/*                         scale={1}*/}
                    {/*                         delay={100}*/}
                    {/*                         fill={'black'}*/}
                    {/*                         d={medium[4]}*/}
                    {/*                         loop={false}/>*/}
                    {/*    )}*/}


                    {/*</View>*/}




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

export default Medium;

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
        // position: 'absolute',
        // right: 0
        // textAlign: 'center'
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
