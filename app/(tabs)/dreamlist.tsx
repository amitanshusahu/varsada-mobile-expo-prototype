import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function dreamlist() {
  return (
    <ScrollView style={{backgroundColor: "#f8edeb"}}>
      <View style={styles.container}>
        <View style={styles.imgholder}>
          <Image source={{ uri: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z' }} style={styles.img} />
          <Text style={styles.caption}> Something </Text>
        </View>
        <View style={styles.imgholder}>
          <Image source={{ uri: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z' }} style={styles.img} />
          <Text style={styles.caption}> Something </Text>
        </View>
        <View style={styles.imgholder}>
          <Image source={{ uri: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z' }} style={styles.img} />
          <Text style={styles.caption}> Something </Text>
        </View>
        <View style={styles.imgholder}>
          <Image source={{ uri: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z' }} style={styles.img} />
          <Text style={styles.caption}> Something </Text>
        </View>
        <View style={styles.imgholder}>
          <Image source={{ uri: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z' }} style={styles.img} />
          <Text style={styles.caption}> Something </Text>
        </View>
        <View style={styles.imgholder}>
          <Image source={{ uri: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z' }} style={styles.img} />
          <Text style={styles.caption}> Something </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', // Enable wrapping
    gap: 14,
    marginVertical: 20,
    padding: 20
  },
  heading: {
    textAlign: 'center',
    fontSize: 24
  },
  imgholder: {
    width: "48%",
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  },
  caption: {
    textAlign: 'center'
  }
})