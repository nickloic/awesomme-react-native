import { StyleSheet } from 'react-native';
import { Text, View} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

export default function  Header() {
    return(
        <View style = {styles.container}>
            <View>
                <Text>14:50</Text>
            </View>

            <View style = {styles.iconsContainer}>
            <FontAwesome5 size={16} name = 'wifi' />
            <FontAwesome5 size={16} name = 'battery-full' />
            <Entypo name = 'bar-graph' size={16}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        padding: 5,
        width: '95%',
        alignSelf: 'center'
    },
    iconsContainer: {
        width: '17%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  });
  