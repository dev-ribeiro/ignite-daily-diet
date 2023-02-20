import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans"
import defaultTheme from "./src/theme/default"
import { Router } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  if (!fontsLoaded) {
    return (
      <Text>Carregando...</Text>
    )
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Router />
      </>
    </ThemeProvider>
  );
}
