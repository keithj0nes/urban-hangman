import { Dimensions } from 'react-native'

export const getDimensions = () => {
    // return {
    //     width: Dimensions.get('window').width,
    //     height: Dimensions.get('window').height
    // }
    if (Dimensions.get('window').width <330) {
        return "iPhone5s"
    }
}