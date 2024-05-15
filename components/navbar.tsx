import { StyleSheet } from 'react-native';
import { Text, ScrollView, View } from 'react-native'

export default function  Navbar() {
    return(
        <ScrollView horizontal style = {styles.container}>
            <View  style = {[styles.navlink, styles.navlinkActive]}>
                <Text style = {[styles.textLink, styles.textLinkActive]}>Orange</Text>
            </View>
            <View style = {styles.navlink}>
                <Text style = {styles.textLink}>Grape</Text>
            </View>
            <View style = {styles.navlink}>
                <Text style = {styles.textLink}>Strawberry</Text>
            </View>
            <View style = {styles.navlink}>
                <Text style = {styles.textLink}>Pineapple</Text>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    navlinkActive: {
        backgroundColor: '#faa8ad',
    },
    navlink: {
        margin: 10,
        borderRadius: 20,
        padding: 7,
    },
    textLink: {
        fontSize: 22,
        fontWeight: '600'
    },
    textLinkActive: {
        color: '#f4404c'
        
    }
  });
  
