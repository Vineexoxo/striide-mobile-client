// app/components/Template.jsx
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Layout from "../_layout"; // Import your Layout component

export default function Template({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time of 3 seconds before showing the content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.styledText}>Striide</Text>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <View style={styles.contentContainer}>{children}</View>
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#802EE8", // Background during loading state
  },
  styledText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#802EE8", // Main content background color
  },
});
