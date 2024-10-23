import BestSeller from "@/components/ui/BestSeller";
import Category from "@/components/ui/Category";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Trending from "@/components/ui/Trending";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function home() {
  return (
    <ScrollView style={style.page}>
      <View>
      <ImageCarousel />
      </View>
      <View style={{padding: 20}}>
        <Text style={style.heading}> Categories </Text>
        <Category />
        <Trending />
        <BestSeller />
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  page: {
    backgroundColor: '#f8edeb'
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'UrbanistS',
    marginTop: 20
  }
})