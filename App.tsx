import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/theme/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <StatusBar style="auto" />
      </>
    </ThemeProvider>
  );
}
