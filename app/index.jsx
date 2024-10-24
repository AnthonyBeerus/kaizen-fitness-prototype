import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";

function App() {
  return <Animated.View entering={FadeIn} exiting={FadeOut} />;
}

export default function index() {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8">
        <Animated.View
          entering={FadeInDown.delay(400).springify()}
          className="flex items-center">
          <Text style={{ fontSize: hp(5) }} className="text-white">
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text style={{ fontSize: hp(5) }} className="text-white">
            For You
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(400).springify()}>
          <TouchableOpacity
          onPress={() => router.push("home")}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-lg">
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-widest">
              GET STARTED
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
