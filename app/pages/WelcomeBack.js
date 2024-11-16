import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ClientPage = () => {
  // For now, mock the user data
  const user = { firstName: "John" }; // Replace with actual user data if needed

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {user.firstName} welcome to Striide.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#802EE8",
    color: 'white',

    
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ClientPage;
