import backgroundImage from "@/assets/images/homeImage.png";
import { onboarding } from "@/constants";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Home = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex-1">
      <View className="absolute inset-0 z-0">
        <Image
          style={{ width: "100%", height: "100%" }}
          source={backgroundImage}
          contentFit="cover"
        />
        <View className="absolute inset-0 bg-black/20"></View>
      </View>
      <View className="flex-1" />
      <View className=" relative z-20 p-5 pb-10 h-5/6">
        <BlurView
          intensity={80}
          tint="light"
          className="flex-1 mx-auto w-[350px] rounded-[3rem] overflow-hidden border border-white/30"
          style={{ backgroundColor: "rgba(250, 245, 235, 0.85)" }}
        >
          <Swiper
            ref={swiperRef}
            loop={false}
            loadMinimal={true}
            loadMinimalSize={1}
            dot={
              <View className="w-1.5 h-1.5 mx-1.5 bg-[#2c2c2c]/10 rounded-full" />
            }
            activeDot={
              <View className="w-6 h-1.5 mx-1.5 bg-[#e07b54] rounded-full" />
            }
            onIndexChanged={(index) => setActiveIndex(index)}
            paginationStyle={{ bottom: 25 }}
            style={{ height: "100%" }}
          >
            {onboarding.map((item) => (
              <View key={item.id} className="p-8 pb-8 items-center">
                <View className="border border-[#d4a574]/50 px-5 py-2 rounded-full mb-10">
                  <Text className="text-[#d4a574] text-[15px] font-extrabold uppercase tracking-widest text-center">
                    You have permission to be bold
                  </Text>
                </View>
                <View className=" mb-8">
                  <View className="items-center mb-6">
                    <Text className="text-center font-serif leading-tight text-[42px] text-[#2c2c2c] font-bold tracking-tight">
                      {item.title1}
                    </Text>
                    <View className="h-2"></View>
                    <Text className="text-center text-[42px] text-[#e07b54] italic tracking-tight">
                      {item.title2}
                    </Text>
                  </View>
                  <Text className="text-center text-2xl font-medium leading-relaxed px-2 text-[#2c2c2c]/70">
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </Swiper>
          <View>
            <View className="px-28 pb-10">
              <TouchableOpacity
                activeOpacity={0.9}
                className="w-full items-center rounded-3xl justify-center py-5 bg-[#2C2C2C] "
                onPress={() =>
                  isLastSlide
                    ? router.replace("/(auth)/signIn")
                    : swiperRef.current?.scrollBy(1)
                }
              >
                <Text className="text-white  z-10 flex font-extrabold text-[17px] text-center tracking-wide">
                  {isLastSlide ? "Get Started" : "Next"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full px-1 mb-4">
            <Text className="text-[#2c2c2c]/60 font-bold text-[13px] hover:text-[#2c2c2c] text-center">
              Already have an account?{" "}
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => router.push("/(auth)/signIn")}
              >
                <Text className="text-[#2d6a6a] font-extrabold ml-1">
                  Sign in
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </BlurView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
