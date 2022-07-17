import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes/Routes';

export default function App() {

  return (
    <PaperProvider>
      <Routes />
      <StatusBar style="auto" />
    </PaperProvider>
    
  );
}
