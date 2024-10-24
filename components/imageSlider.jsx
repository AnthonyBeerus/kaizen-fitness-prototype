import { View, Text } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={{ width: wp(100) - 70, height: hp(28) }}>
        <ParallaxImage
          source={item} // Changed 'Source' to 'source'
          containerStyle={{ flex: 1, borderRadius: 30 }}
          style={{ resizeMode: "contain" }}
          parallaxFactor={1} // Changed 'ParallaxFactor' to 'parallaxFactor'
          {...parallaxProps} // Changed 'ParallaxImage' to 'parallaxProps'
        />
      </View>
    );
  };

  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={renderItem}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={3000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}
