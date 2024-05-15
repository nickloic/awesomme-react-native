import { StyleSheet } from 'react-native';
import { Text, View, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function  Menu() {
    return(
        <View style = {styles.container}>

            <View>
                <Entypo name = 'menu' size={32}/>
            </View>

            <View style = {styles.imgContainer}>
                <Image source={require('../assets/images/favicon.png') }></Image>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        padding: 5
    },
    imgContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#f1f1f1', 
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    }
  });
  
