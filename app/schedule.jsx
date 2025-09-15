import { View, Text, StyleSheet } from "react-native";

export default function Schedule() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Class Schedule</Text>

      <View style={styles.card}>
        <Text style={styles.subject}>Mathematics</Text>
        <Text>Monday & Wednesday - 9:00 AM</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>Filipino</Text>
        <Text>Monday & Wednesday - 8:00 AM</Text>
      </View>

    <View style={styles.card}>
        <Text style={styles.subject}>MAPEH</Text>
        <Text>Monday & Wednesday - 2:00 PM</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>Science</Text>
        <Text>Tuesday & Thursday - 10:30 AM</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>English</Text>
        <Text>Friday - 1:00 PM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#eef2ff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 15, elevation: 2 },
  subject: { fontSize: 18, fontWeight: "bold" },
});
