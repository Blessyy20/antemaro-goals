import { View, Text, StyleSheet } from "react-native";

export default function Grades() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 View Grades</Text>

      <View style={styles.card}>
        <Text style={styles.subject}>Mathematics: <Text style={styles.grade}>90%</Text></Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subject}>Filipino: <Text style={styles.grade}>91%</Text></Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subject}>MAPEH: <Text style={styles.grade}>81%</Text></Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subject}>Science: <Text style={styles.grade}>85%</Text></Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subject}>English: <Text style={styles.grade}>88%</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fdfdfd" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: { padding: 15, borderRadius: 10, backgroundColor: "#f0f0f0", marginBottom: 12 },
  subject: { fontSize: 18 },
  grade: { fontWeight: "bold", color: "#682988" },
});
