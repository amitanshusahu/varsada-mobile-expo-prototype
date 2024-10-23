import { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';


const { width: screenWidth } = Dimensions.get('window');

interface CarouselItem {
  title: string;
  image: string; // Enforce only valid keys
}

// Sample data with stricter typing
const data: CarouselItem[] = [
  { title: 'text', image: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/banner/ban1.png?t=2024-10-23T17%3A01%3A57.379Z' },
  { title: 'text', image: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/banner/ban2.png?t=2024-10-23T16%3A44%3A17.647Z' },
  { title: 'text', image: 'https://tscjxtnxkyqbmkrlrwvc.supabase.co/storage/v1/object/public/varsada/banner/ban3.png?t=2024-10-23T16%3A44%3A30.756Z' },
];
const AUTO_SCROLL_INTERVAL = 3000; // 3 seconds

const ImageCarousel: React.FC = () => {
  const [autoPlay, setAutoPlay] = useState(true); // Manage autoplay

  useEffect(() => {
    // Start auto-play on mount
    setAutoPlay(true);
    return () => setAutoPlay(false); // Cleanup on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={screenWidth}
        height={300}
        autoPlay={autoPlay}
        autoPlayInterval={AUTO_SCROLL_INTERVAL}
        data={data}
        snapEnabled={false}
        scrollAnimationDuration={500}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ImageBackground
              source={{uri: item.image}}
              style={styles.imageBackground}
              resizeMode="cover"
            >
              <View style={styles.overlay} />
            </ImageBackground>
            {/* <View style={styles.captionContainer}>
              <Text style={styles.caption}>{item.title}</Text>
            </View> */}

          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  card: {
    position: 'relative',
    width: screenWidth,
  },
  image: {
    width: screenWidth,
    height: 300,
    resizeMode: 'cover',
  },
  captionContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  caption: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageBackground: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)', // Adjust the darkness level
  },
});

export default ImageCarousel;
