import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { tailwind } from "../lib/tailwind";

const LoginScreen = () => {
  return (
    <SafeAreaView style={tailwind("flex-1 bg-white items-center")}>
      <View style={tailwind("pt-12 items-center")}></View>
    </SafeAreaView>
  );
};

export default LoginScreen;
