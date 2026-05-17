import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const Onboarding = () => {
  useEffect(()=>{
    setTimeout(()=>router.push(`/(auth)`))
  })
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-600 text-1xl font-bold">Onboarding</Text>
    </View>
  );
};

export default Onboarding;
