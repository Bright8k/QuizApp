import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function SummaryScreen() {
  const { answers } = useLocalSearchParams<{ answers: string }>();
  const parsedAnswers = answers ? JSON.parse(answers) : [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.text}>Your answers: {JSON.stringify(parsedAnswers)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  text: { fontSize: 16 },
});
