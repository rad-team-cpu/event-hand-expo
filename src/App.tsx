import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Routes from '@/routes';
import { ClerkProvider } from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import SecureStore from 'expo-secure-store';
import useTheme from './core/theme';

// const tokenCache = {
//   async getToken(key: string) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key: string, value: string) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

function App() {
  const { assets } = useTheme();

  const [fontsLoaded] = useFonts({
    'OpenSans-Light': assets.OpenSansLight,
    'OpenSans-Regular': assets.OpenSansRegular,
    'OpenSans-SemiBold': assets.OpenSansSemiBold,
    'OpenSans-ExtraBold': assets.OpenSansExtraBold,
    'OpenSans-Bold': assets.OpenSansBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <PaperProvider>
      <ClerkProvider
        // tokenCache={tokenCache}
        publishableKey={`${process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}`}
      >
        <Routes />
      </ClerkProvider>
    </PaperProvider>
  );
}

export default App;
