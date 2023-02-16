import { Home } from '@screens/Home';
import { StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans"
import defaultTheme from './src/theme/default'

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
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Home />
      </>
    </ThemeProvider>
  );
}
