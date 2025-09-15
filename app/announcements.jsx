import { View, Text, StyleSheet, FlatList } from "react-native";

const announcements = [
  { id: "1", text: "📢 No classes on Friday (Holiday)" },
  { id: "2", text: "📢 Midterm exams start next week" },
  { id: "3", text: "📢 Submission for projects is Sept 30" },
];

export default function Announcements() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📢 Announcements</Text>
      <FlatList
        data={announcements}
        renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20, textAlign: "center",},
  item: { fontSize: 16, marginBottom: 12, textAlign: "center", },
});
