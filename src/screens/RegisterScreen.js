import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { tailwind } from "../lib/tailwind";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../assets/css/Styles";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    //send a post request to backend
    axios
      .post("http://192.168.0.101:8000/register", user)
      .then((response) => {
        // console.log(response);
        Alert.alert("Registration successfully");
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        Alert.alert("Registration failed");
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={tailwind("flex-1 bg-white px-2 mt-4")}>
      <View style={tailwind("w-min items-center")}>
        <Image
          style={tailwind("w-52 h-20")}
          source={require("../assets/logo.png")}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={tailwind("items-center")}>
          <Text style={[Styles.subheading1, tailwind("mt-3")]}>
            Register to your account
          </Text>
        </View>
        <View style={tailwind("mt-20")}>
          <View style={[Styles.input2, tailwind("flex-row items-center py-1")]}>
            <Ionicons
              name="person"
              size={24}
              style={{ marginHorizontal: 8 }}
              color="gray"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "black",
                paddingVertical: 10,
                width: 300,
                fontSize: 16,
              }}
              placeholder="enter your name"
              selectionColor={"black"}
            />
          </View>
        </View>
        <View style={tailwind("mt-6")}>
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
        <View style={tailwind("mt-12")} />
        <Pressable
          onPress={handleRegister}
          style={[
            tailwind("w-52  rounded-lg p-2"),
            {
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#e37576",
            },
          ]}
        >
          <Text style={tailwind("text-center text-white text-xl leading-6")}>
            Register
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={tailwind("mt-5")}
        >
          <Text style={tailwind("text-center text-gray-400 text-lg leading-6")}>
            Already have an account? Login
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
