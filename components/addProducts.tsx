import { StyleSheet } from 'react-native';
import { Text, ScrollView, View, Image, Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function  Products() {
    return(
        <ScrollView horizontal style = {styles.container}>
           
            <View style = {[styles.productsContainer, styles.orangeContainer]}>
                <View style = {styles.faviconContainer}>
                    <FontAwesome name = 'heart' size={24} color={'red'}/>
                </View>
                <Image source={require('../assets/images/orange.png')} style = {styles.image}></Image>
                <View style = {styles.productTitle}>
                    <Text>Orange</Text>
                    <Text>$10</Text>
                </View>
               <View style = {[styles.btn, styles.btnOrange]}>
                    <Button title='Add' color={'#333'}/>
               </View>
            </View>
            
            <View style = {[styles.productsContainer, styles.grapeContainer]}>
                <View style = {styles.faviconContainer}>
                    <FontAwesome name = 'heart' size={24} color={'red'}/>
                </View>
                <Image source={require('../assets/images/grape.jpg')} style = {styles.image}></Image>
                <View style = {styles.productTitle}>
                    <Text>Grape</Text>
                    <Text>$15</Text>
                </View>
               <View style = {[styles.btn, styles.btnGrape]}>
                    <Button title='Add' color={'#333'}/>
               </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    productsContainer: {
        width: 230,
        height: 300,
        margin: 15,
        borderRadius: 15
    },
    faviconContainer: {
        width: 30, 
        height: 30,
        backgroundColor: '#f1f1f1',
        left: '80%',
        top: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    },
    productTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        top: 70
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        top: 50
    },
    btn: {
        top: 100,
        width: 70,
        alignSelf: 'center',
        borderRadius: 50,
    },
    orangeContainer: {
        backgroundColor: '#fce9c8'
    },
    btnOrange: {
        backgroundColor: 'orange',
    },
    grapeContainer: {
        backgroundColor: '#d9defe'
    },
    btnGrape: {
        backgroundColor: '#a9aeff'
    }
  });
  
