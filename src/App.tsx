import React from 'react';
import { Provider } from 'react-native-paper';
import { theme } from './core/theme';
import { Routes } from '@/routes';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { tokenCache } from "./cache";

const CLERK_PUBLISHABLE_KEY= 'pk_test_YWNjZXB0ZWQtYnVjay05LmNsZXJrLmFjY291bnRzLmRldiQ';



function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}
    tokenCache={tokenCache}
    >
      <Provider theme={theme}>
        <Routes />
      </Provider>
    </ClerkProvider>
  );
}

export default App;
