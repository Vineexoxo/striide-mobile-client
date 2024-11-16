import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook

const Home = () => {
  const navigation = useNavigation();  // Using the navigation hook

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to <Text style={styles.boldText}>Striide</Text></Text>
        <Text style={styles.description}>Join us in building a connected and aware community where we look out for each other.</Text>
        <Text style={styles.description}>Welcome to Version 1! It&apos;s not perfect, but with your help, we can make it amazing.</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.hollowButton]} 
          onPress={() => navigation.navigate('AlmostThere')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.hollowButton]} 
          onPress={() => navigation.navigate('WelcomeBack')}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen usage
    justifyContent: 'center',  // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#802EE8',
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
    maxWidth: '80%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 70,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    marginBottom: 10,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 90,
  },
  button: {
    width: 300,  // Set the fixed width of the button
    paddingVertical: 12,  // Vertical padding for height
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',  // Centers text horizontally inside button
  },
  hollowButton: {
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;
