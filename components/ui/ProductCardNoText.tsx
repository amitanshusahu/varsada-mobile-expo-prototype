import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function ProductCardNoText({ img }: { img: string }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: img }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay} >
          <Text style={styles.caption}>Active Wear {'>'}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    overflow: 'hidden',
    borderRadius: 2
  },
  imageBackground: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  caption:{
    fontSize: 18,
    fontFamily: 'UrbanistR',
    fontWeight: "700",
    color: 'white'
  }
})