import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Layout from "../components/_layout";

const ClientPage = () => {
  // For now, mock the user data
  const user = { firstName: "John" }; // Replace with actual user data if needed

  return (
    <Layout>
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {user.firstName} welcome to Striide.</Text>
    </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#802EE8",

    
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',

  },
});

export default ClientPage;
