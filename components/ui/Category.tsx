import { StyleSheet, View} from "react-native";
import ProductCardNoText from "./ProductCardNoText";

export default function Category() {
  return (
    <View style={style.container}>
      <ProductCardNoText img="https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z"/>
      <ProductCardNoText img="https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img16.webp?t=2024-10-23T11%3A08%3A21.248Z"/>
      <ProductCardNoText img="https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img14.webp?t=2024-10-23T11%3A08%3A44.902Z"/>
      <ProductCardNoText img="https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img13.webp?t=2024-10-23T11%3A08%3A54.836Z"/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', // Enable wrapping
    gap: 14,
    marginVertical: 20,
  },
  box: {
    width: '48%', // Adjust the width as needed
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
})