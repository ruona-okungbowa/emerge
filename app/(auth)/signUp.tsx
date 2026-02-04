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

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreateAccount = () => {};

  const handleSignIn = () => {
    router.replace("/(auth)/signIn");
  };

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
          contentContainerClassName="mt-auto relative z-20 p-5 pb-8"
        >
          <View className="rounded-[48px] overflow-hidden mb-8">
            <BlurView
              intensity={80}
              tint="light"
              className=" p-7 flex flex-col items-center"
              style={{ backgroundColor: "rgba(250, 245, 235, 0.85)" }}
            >
              <View className="items-center mb-10">
                <View className="border border-[#d4a574]/50 py-2 px-5 rounded-full">
                  <Text className="text-[#d4a574] text-[10px] font-extrabold uppercase tracking-[0.2em] leading-none text-center">
                    You have permission to be bold
                  </Text>
                </View>
              </View>
              <Text className="font-serif text-[2.2rem] text-[#2c2c2c] font-bold mb-6 text-center tracking-tight">
                Join the Squad
              </Text>
              <View className="w-full space-y-4 mb-8">
                <View className="space-y-2 mt-6">
                  <Text className="text-[12px] font-bold  uppercase tracking-wider text-[#2c2c2c]/60 mb-2 ml-2">
                    Username:
                  </Text>
                  <TextInput
                    placeholder="Enter a username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={form.username}
                    onChangeText={(value) =>
                      setForm({ ...form, username: value })
                    }
                    className="w-full bg-white/60 border border-[#2c2c2c]/10 rounded-xl px-4 py-3.5 text-[#2c2c2c] outline-none"
                  />
                </View>
                <View className="space-y-2 mt-3">
                  <Text className="text-[12px] font-bold  uppercase tracking-wider text-[#2c2c2c]/60 mb-2 ml-2">
                    Email:
                  </Text>
                  <TextInput className="w-full bg-white/60 border border-[#2c2c2c]/10 rounded-xl px-4 py-3.5 text-[#2c2c2c] outline-none" />
                </View>
                <View className="space-y-1 mt-5">
                  <Text className="text-[12px] font-bold uppercase tracking-wider text-[#2c2c2c]/60 ml-1">
                    Password:
                  </Text>
                  <View className="relative">
                    <TextInput
                      placeholder="••••••••"
                      value={form.password}
                      onChangeText={(value) =>
                        setForm({ ...form, password: value })
                      }
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                      autoCorrect={false}
                      className="w-full bg-white/60 border border-[#2c2c2c]/10 rounded-2xl px-5 py-4 text-[#2c2c2c] font-medium pr-14"
                    />
                    <TouchableOpacity
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Text className="text-[#2c2c2c]/40 text-xl">
                        {showPassword ? (
                          <Eye size={15} />
                        ) : (
                          <EyeOff size={15} />
                        )}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View className="w-full mb-6">
                <TouchableOpacity className="w-full bg-[#1f1f1f] py-4 px-3 rounded-2xl tracking-wide">
                  <Text className="text-white font-bold text-[16px] text-center">
                    Create Account
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-center items-center pt-8">
                <Text className="text-[#2c2c2c]/60 font-bold text-[14px]">
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={handleSignIn}>
                  <Text className="text-[14px] text-[#2d6a6a] font-extrabold ml-1">
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </BlurView>
            <View className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-50"></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
