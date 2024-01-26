//
import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
//
// Get the width of the device screen
const { width } = Dimensions.get('window');
//
const ImageCarousel = () => {
    //
    const [activeSlide, setActiveSlide] = useState(0);
    //
    const images = [
        'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_04_Add-a-heading-7.jpg',
        'https://cdn.educba.com/academy/wp-content/uploads/2014/01/Investment-Banking-Interview-Mistakes-.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmZiByjmSeXSkReU-uUo8ofCI7oUj0CfTtqXWxWmmgBYITkDV7NTLO1b47vW6kJ-T61c&usqp=CAU',
    ];
    //
    const renderItem = ({ item, index }) => (
        <View style={{ width: "100%", backgroundColor: "red" }}>
            <Image
                resizeMode="cover"
                source={{ uri: item }}
                style={{ width: '100%', height: "100%" }}
            />
        </View>
    );
    //
    return (
        <View style={styles.container}>
            <Carousel
                loop
                data={images}
                width={width}
                autoPlay={true}
                height={width / 2}
                renderItem={renderItem}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            {/* <Pagination
                dotsLength={images.length}
                activeDotIndex={activeSlide}
                containerStyle={{ marginTop: -25 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            /> */}
        </View>
    );
};
//
const styles = StyleSheet.create({
    container: {
        height: 150,
        borderRadius: 7,
        overflow: "hidden",
        backgroundColor: "blue"
    },
});
//
export default ImageCarousel;