import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { initialState, reducer } from './src/reducers';
import AppNavigator from './src/navigators/stacks/AppNavigator';
import ProfileScreen from './src/screens/ProfileScreen';

export const StoreContext = React.createContext(null)

export default function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StoreContext.Provider value={{state, dispatch}}>
          <AppNavigator />
          <ProfileScreen />
        </StoreContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
