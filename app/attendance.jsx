import { View, Text, StyleSheet, FlatList } from "react-native";

const records = [
  { id: "1", date: "Sept 10", status: "Present" },
  { id: "2", date: "Sept 11", status: "Absent" },
  { id: "3", date: "Sept 12", status: "Present" },
  { id: "3", date: "Sept 15", status: "Present" },
  { id: "3", date: "Sept 16", status: "Present" },
];

export default function Attendance() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Attendance</Text>
      <FlatList
        data={records}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.date}: <Text style={{ fontWeight: "bold" }}>{item.status}</Text>
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  item: { fontSize: 16, marginBottom: 12 },
});
