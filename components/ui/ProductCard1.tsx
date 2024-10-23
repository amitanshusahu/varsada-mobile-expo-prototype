import { StyleSheet, View, Image } from "react-native";

export default function ProductCard1({img}: {img: string}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: img}} style={styles.img}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginRight: 20,
  },
  img: {
    width: 200,
    height: 300,
    resizeMode: 'cover'
  }
})