import { Home } from '@screens/Home';
import { StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans"
import defaultTheme from './src/theme/default'
import { Statistics } from '@screens/Statistics';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Statistics />
      </SafeAreaView>
    </ThemeProvider>
  );
}
