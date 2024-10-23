import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard1 from "./ProductCard1";

export default function Trending() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Trending Today</Text>

      <ScrollView
        style={styles.scroll}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={300 * 0.7 + 20}  // Width + Margin
        decelerationRate="fast"
      >
        <ProductCard1 img="https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z" />
        <ProductCard1 img="https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img9.jpeg?t=2024-10-23T11%3A40%3A24.263Z" />
        <ProductCard1 img="https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img10.jpeg?t=2024-10-23T11%3A40%3A40.033Z" />
        <ProductCard1 img="https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'UrbanistS',
    fontWeight: '500'
  },
  scroll: {
    paddingVertical: 20,
  }
})