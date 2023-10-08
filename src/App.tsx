import React from 'react';
import { Provider } from 'react-native-paper';
import Routes from '@/routes';
import { ClerkProvider } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={Constants.expoConfig!.extra!.clerkPublishableKey}
    >
        <Routes />
    </ClerkProvider>
  );
}

export default App;
