/* make global class combining tailwind-rn classes and css style */

import { StyleSheet } from "react-native";
import { tailwind } from "../../lib/tailwind";

const Styles = StyleSheet.create({
  btn: {
    ...tailwind("w-full h-13 rounded items-center justify-center"),
  },
  input: {
    ...tailwind("bg-gray-300 rounded h-13 px-3 w-full pb-2"),
  },
  input2: {
    ...tailwind("bg-gray-400 rounded h-13 px-3 w-full"),
  },
  avatar: {
    ...tailwind("h-11 w-11 rounded-full border-2 border-charcoal"),
  },
  border: {
    ...tailwind("border-2 border-charcoal rounded-full"),
  },
  chips: {
    ...tailwind("bg-primary h-8 px-3 justify-center"),
    borderRadius: 48,
  },
  //   display2: {
  //     color: "white",
  //     fontSize: 60,
  //     lineHeight: 75,
  //     letterSpacing: -0.4,
  //     fontFamily: "",
  //   },
  h2: {
    ...tailwind("text-black text-4xl leading-11 tracking-wide"),
    fontFamily: "",
  },
  h3: {
    ...tailwind("text-black text-2xl leading-8"),
    fontFamily: "",
  },
  h4: {
    ...tailwind("text-black text-xl leading-7"),
    fontFamily: "",
  },
  subheading1: {
    ...tailwind("text-lg leading-7 tracking-wide font-bold"),
    fontFamily: "",
    color: "#041e42",
  },
  subheading2: {
    ...tailwind("text-black text-base leading-6 tracking-wide"),
    fontFamily: "",
  },
  subheading3: {
    ...tailwind("text-black text-base leading-6 tracking-wide"),
    fontFamily: "",
  },
  body: {
    ...tailwind("text-black text-base leading-6 tracking-wide font-semibold"),
    fontFamily: "",
  },
  body1: {
    ...tailwind("text-black text-base leading-6 tracking-wide font-semibold"),
    fontFamily: "",
  },
  body2: {
    ...tailwind("text-black text-sm leading-5 font-semibold tracking-wide"),
    fontFamily: "",
  },
  body3: {
    ...tailwind(
      "text-black text-sm font-semibold leading-5 tracking-wide uppercase"
    ),
    fontFamily: "",
  },
  body4: {
    ...tailwind("text-black text-sm  leading-5 tracking-wide"),
    fontFamily: "",
  },
  body5: {
    ...tailwind(
      "text-black text-sm font-semibold leading-5 tracking-wide uppercase"
    ),
    fontFamily: "",
  },
  button: {
    ...tailwind(
      "text-black font-semibold text-base leading-5 tracking-wider uppercase"
    ),
    fontFamily: "",
  },
  caption: {
    ...tailwind("text-black text-xs leading-4 tracking-wide font-medium"),
    fontFamily: "",
  },
  caption2: {
    ...tailwind("text-black text-xs leading-4 tracking-wide font-medium"),
    fontFamily: "",
  },
});

export default Styles;
