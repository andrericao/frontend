//import { ActivityIndicator } from "react-native";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Loading } from "@components/Loading";

import theme from "@theme/index";

import { Routes } from "@routes/index";

export default function App() {

  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
        {fontsLoaded ? <Routes /> : <Loading />}
        {/*Entender linha debaixo e linha 1 (comentada) */}
        {/*!fontsLoaded ? <Groups /> : <ActivityIndicator />*/}
      
    </ThemeProvider>
  );
}