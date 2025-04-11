import { useRouter } from "expo-router";
import { View, Button, StyleSheet } from "react-native";
import questions from "../lib/questions";

import { useState } from "react";

export default function HomeScreen() {
  const router = useRouter();
  const [prevAnswers, setPrevAnswers] = useState<number[]>([]);

  return (
    <View style={styles.container}>
      
      <Button
        title="Start Quiz"
        onPress={() => {
          console.log("Navigating to summary...");
          router.push({
            pathname: "/(tabs)/question",
            params: { answers: JSON.stringify([...prevAnswers, 0]) },
          });
          console.log("Navigation triggered");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
