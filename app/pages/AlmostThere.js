import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook
import NextPageButton from '../components/NextPageButton';  // Import the NextPageButton component

const Page = () => {
  const navigation = useNavigation();  // Use navigation hook to navigate to other screens

  const handleNextPage = () => {
    navigation.navigate('AlmostThere2');  // Navigate to the "AlmostThere2" screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title Container */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Striide</Text>
      </View>

      {/* Hello Container */}
      <View style={styles.helloContainer}>
        <Text style={styles.hello}>HELLO!</Text>
      </View>

      {/* Description Container */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>We're building this for you!</Text>
        <Text style={styles.description}>Tell us a bit about yourself so we can tailor the experience to you.</Text>
      </View>

      {/* Button Container */}
      <View style={styles.footer}>
        {/* Use NextPageButton Component */}
        <NextPageButton onPress={handleNextPage} buttonText="Next" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#802EE8',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
  },
  helloContainer: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'left',
  },
  hello: {
    fontSize:80,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    paddingLeft: 10,
    fontFamily: 'Montserrat, sans-serif',
  },
  descriptionContainer: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    marginLeft: 40,
    marginRight: 40,
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Nunito Sans, sans-serif',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default Page;
