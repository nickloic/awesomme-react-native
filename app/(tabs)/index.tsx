import { StyleSheet } from 'react-native';
import { Text, View, ScrollView} from 'react-native'
import Header  from '../../components/header'
import Menu from '../../components/menu';
import Navbar from '../../components/navbar';
import Products from '../../components/addProducts';

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style = {styles.container}>

        {/* <Header/> */}
        <Menu/>

        <View style = {styles.titleContainer}>
          <Text style = {styles.title}>
            Discover seasonal
          </Text>
          <Text style = {styles.title}>
            Fruits and Vegetables
          </Text>
        </View>

        <Navbar/>
        <Products/>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32
  },
  titleContainer: {
    margin: 5
  }
});

