import Divider from "@/components/ui/Divider";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function varsadaBag() {
  return (
    <ScrollView style={styles.continer}>
      <View style={styles.flex}>
        <FontAwesome6 size={24} name="location-dot" color={'black'} />
        <View>
          <Text style={styles.text}>Home</Text>
          <Text style={styles.text}>1901 tharade cr.china. Hawai</Text>
          <Text style={styles.text}>23490</Text>
        </View>
      </View>

      <Divider />

      <View style={[styles.flex, { paddingTop: 20 }]}>
        <Image source={{ uri: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z' }} style={styles.img} />
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Product Name</Text>
            <Text>Size XL</Text>
            <Text>$800</Text>
          </View>
          <View style={styles.flex}>
            <View style={{ padding: 10, backgroundColor: 'hotpink' }}></View>
            <View style={{ padding: 10, backgroundColor: 'blue' }}></View>
            <View style={{ padding: 10, backgroundColor: 'orange' }}></View>
          </View>
        </View>
      </View>

      <Divider />

      <View style={[styles.flex, { paddingTop: 20 }]}>
        <Image source={{ uri: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z' }} style={styles.img} />
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Product Name</Text>
            <Text>Size XL</Text>
            <Text>$800</Text>
          </View>
          <View style={styles.flex}>
            <View style={{ padding: 10, backgroundColor: 'hotpink' }}></View>
            <View style={{ padding: 10, backgroundColor: 'blue' }}></View>
            <View style={{ padding: 10, backgroundColor: 'orange' }}></View>
          </View>
        </View>
      </View>

      <Divider />

      <View style={[styles.flex, { paddingTop: 20 }]}>
        <Image source={{ uri: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/productimg/img2.jpeg?t=2024-10-23T11%3A05%3A11.218Z' }} style={styles.img} />
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Product Name</Text>
            <Text>Size XL</Text>
            <Text>$800</Text>
          </View>
          <View style={styles.flex}>
            <View style={{ padding: 10, backgroundColor: 'hotpink' }}></View>
            <View style={{ padding: 10, backgroundColor: 'blue' }}></View>
            <View style={{ padding: 10, backgroundColor: 'orange' }}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  continer: {
    padding: 20,
    backgroundColor: '#f8edeb',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
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