import { Text, View, StyleSheet } from "react-native"
export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Encontro no Rabonni
      </Text>
      <Text style={styles.eventDate}>
        12 de outubro de 2019
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24
  },

  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },

  eventDate: {
    color: "#FFF"
  }
});