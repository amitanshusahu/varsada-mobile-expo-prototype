import Divider from "@/components/ui/Divider";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, StyleSheet, ScrollView, Text } from "react-native";

export default function account() {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.flex, {justifyContent: 'center', alignItems: 'center', paddingTop: 30}]}>
        <View style={
          {
            borderRadius: 999,
            padding: 20,
            width: 100,
            height: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'hotpink'
          }
        }>
          <FontAwesome6 size={44} name="user" color={'white'} />
        </View>
        <Text style={[styles.text, {fontSize: 20}]}>User Name</Text>
      </View>
      
      <Divider />

      <View style={{backgroundColor: '#dddd', height: 200, borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading user info..</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8edeb',
  },
  flex: {
    display: 'flex',
    gap: 10,
    marginBottom: 20
  },
  text: {
    fontFamily: 'UrbanistR',
  },
  img: {
    width: 150,
    height: 200,
    resizeMode: 'cover'
  }
})