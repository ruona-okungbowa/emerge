import backgroundImage from "@/assets/images/homeImage.png";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {};

  const handleSignUp = () => {
    router.replace("/(auth)/signUp");
  };

  const handleForgotPassword = () => {};

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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerClassName="flex-grow justify-end px-6 pb-12"
        >
          <View className="rounded-[48px] overflow-hidden mb-8">
            <BlurView
              intensity={80}
              tint="light"
              className=" p-7 pb-28 flex flex-col items-center"
              style={{ backgroundColor: "rgba(250, 245, 235, 0.85)" }}
            >
              <View className="items-center mb-10">
                <View className="border border-[#d4a574]/50 py-2 px-5 rounded-full">
                  <Text className="text-[#d4a574] text-[10px] font-extrabold uppercase tracking-[0.2em] leading-none text-center">
                    You have permission to be bold
                  </Text>
                </View>
              </View>
              <View className="mb-8">
                <Text className="font-serif text-[3rem] leading-tight font-bold tracking-tight text-center text-[#2c2c2c]">
                  Welcome Back
                </Text>
              </View>
              <View className="w-full space-y-4">
                <View className="space-y-2 mt-8">
                  <Text className="text-[12px] mb-1 font-bold ml-1 uppercase tracking-wider text-[#2c2c2c]/60">
                    Username:
                  </Text>
                  <TextInput
                    placeholder="Enter your username"
                    value={form.username}
                    onChangeText={(value) =>
                      setForm({ ...form, username: value })
                    }
                    autoCapitalize="none"
                    autoCorrect={false}
                    className="w-full bg-white/60  border border-[#2c2c2c]/10 rounded-2xl px-5 py-4 outline-none text-[#2c2c2c] font-medium"
                  />
                </View>
                <View className="space-y-2 mt-8">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-[12px] font-bold text-[#2c2c2c]/60 ml-1 uppercase tracking-wider">
                      Password:
                    </Text>
                    <TouchableOpacity>
                      <Text className="text-[12px] font-extrabold mb-3 text-[#2d6a6a]">
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="relative">
                    <TextInput
                      placeholder="********"
                      value={form.password}
                      secureTextEntry={!showPassword}
                      onChangeText={(value) =>
                        setForm({ ...form, password: value })
                      }
                      autoCapitalize="none"
                      autoCorrect={false}
                      className="w-full bg-white/60 border border-[#2c2c2c]/10 rounded-2xl px-5 py-4 outline-none text-[#2c2c2c] font-medium pr-14"
                    />
                    <TouchableOpacity
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Text className="text-xl text-[#2c2c2c]">
                        {showPassword ? (
                          <Eye size={15} />
                        ) : (
                          <EyeOff size={15} />
                        )}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="pt-12">
                  <TouchableOpacity className="w-full bg-[#1f1f1f] py-5 px-6 rounded-3xl tracking-wide">
                    <Text className="text-white font-extrabold text-[17px] text-center ">
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-center items-center pt-8">
                  <Text className="text-[14px] font-bold text-[#2c2c2c]/60">
                    Don't have an account?
                  </Text>
                  <TouchableOpacity onPress={handleSignUp}>
                    <Text className="text-[14px] text-[#2d6a6a] font-extrabold ml-1">
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BlurView>
            <View className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-50"></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
