import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const HelloWorld = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20
  }
});
export default HelloWorld;