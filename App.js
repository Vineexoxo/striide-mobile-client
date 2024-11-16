import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/pages/Home';
import AlmostThere from './app/pages/AlmostThere';  // Import GetStarted component
import AlmostThere2 from './app/pages/AlmostThere2';

// Create a Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="AlmostThere" component={AlmostThere} options={{ title: 'Almost There' }} />
          <Stack.Screen name="AlmostThere2" component={AlmostThere2} options={{ title: 'Almost There 2' }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#802EE8',  // Background color can be applied here for overall layout
  },
});

export default App;
