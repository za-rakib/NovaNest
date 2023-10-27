import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { tailwind } from "../lib/tailwind";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../assets/css/Styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // console.log({ email, password });
  return (
    <SafeAreaView style={tailwind("flex-1 bg-white items-center")}>
      <View style={tailwind("w-min ")}>
        <Image
          style={tailwind("w-52 h-20")}
          source={require("../assets/logo.png")}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={tailwind("items-center")}>
          <Text style={[Styles.subheading1, tailwind("mt-3")]}>
            Login to your account
          </Text>
        </View>

        <View style={tailwind("mt-20")}>
          <View style={[Styles.input2, tailwind("flex-row items-center py-1")]}>
            <MaterialIcons
              style={{ marginHorizontal: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "black",
                paddingVertical: 10,
                width: 300,
                fontSize: 16,
              }}
              placeholder="enter your email"
              selectionColor={"black"}
            />
          </View>
        </View>

        <View style={tailwind("mt-6")}>
          <View style={[Styles.input2, tailwind("flex-row items-center py-1")]}>
            <AntDesign
              name="lock"
              style={{ marginHorizontal: 8 }}
              size={24}
              color="gray"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                color: "black",
                paddingVertical: 10,
                width: 300,
                fontSize: 16,
              }}
              placeholder="enter your password"
              selectionColor={"black"}
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={tailwind("flex-row justify-between items-center mt-3")}>
          <Text>Keep me logged in</Text>
          <TouchableOpacity>
            <Text style={tailwind("text-azure font-bold")}>
              Forgate password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind("mt-20")} />
        <Pressable
          style={[
            tailwind("w-52 bg-yellow-400 rounded-lg p-2"),
            { marginLeft: "auto", marginRight: "auto" },
          ]}
        >
          <Text style={tailwind("text-center text-white text-xl leading-6")}>
            Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={tailwind("mt-5")}
        >
          <Text style={tailwind("text-center text-gray-400 text-xl leading-6")}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
