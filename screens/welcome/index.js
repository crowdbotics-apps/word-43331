import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./46faa630-5f7d-40ce-baec-16979b9c6233.jpeg")} />
          <Text style={styles.text}>{"Hello World\n          "}</Text>
        </View>
        <Text style={styles.footer}>{"Desenvolvido por Marcelo"}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: 700,
    marginBottom: 20
  }
});
export default WelcomeScreen;