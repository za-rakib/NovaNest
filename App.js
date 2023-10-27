import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <>
      <StackNavigator />
    </>
  );
}

// import { View, Text, TextInput } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { tailwind } from "./src/lib/tailwind";
// import Styles from "./src/assets/css/Styles";
// import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";

// const App = () => {
//   return (
//     <SafeAreaView style={tailwind("")}>
//       <Text>App</Text>
//       <View style={tailwind("mt-20 mx-2")}>
//         <View style={[Styles.input2, tailwind("flex-row items-center py-1")]}>
//           <Ionicons
//             name="person"
//             size={24}
//             style={{ marginHorizontal: 8 }}
//             color="gray"
//           />
//           <TextInput
//             // value={name}
//             // onChangeText={(text) => setName(text)}
//             style={{
//               color: "black",
//               paddingVertical: 10,
//               width: 300,
//               fontSize: 16,
//             }}
//             placeholder="enter your name"
//             selectionColor={"black"}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;
