import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

import { Loading } from "@components/Loading";

import theme from "@theme/index";

import { Groups } from "@screens/Groups";

export default function App() {
  const [fonstsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fonstsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
