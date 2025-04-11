import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";
import questions from "../lib/questions";

export default function QuestionScreen() {
  const { index, answers } = useLocalSearchParams<{ index?: string; answers?: string }>();
  const router = useRouter();

  const questionIndex = parseInt(index || "0", 10);
  const prevAnswers = answers ? JSON.parse(answers) : [];

  if (isNaN(questionIndex) || questionIndex < 0 || questionIndex >= questions.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Invalid question index.</Text>
      </View>
    );
  }

  const question = questions[questionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{question.prompt}</Text>
      <Button
        title="Next"
        onPress={() =>
          router.push({
            pathname: "/(tabs)/summary",
            params: { answers: JSON.stringify([...prevAnswers, 0]) },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  prompt: { fontSize: 18, marginBottom: 16 },
  error: { fontSize: 18, color: "red", textAlign: "center" },
});
