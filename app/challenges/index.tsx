import CardMeta from "@/components/CardMeta";
import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const Challenges = () => {
  useEffect(() => {
    // getGoalsFromApiAsync();
  }, []);

  // const getGoalsFromApiAsync = async () => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:5000/api/goals");
  //     const data = await response.json();
  //     console.log("data", data);
  //     return data.goals;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minhas metas</Text>
      <Text style={styles.subtitle}>
        Acompanhe e gerencie suas metas financeiras
      </Text>
      <CardMeta />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flexDirection: "column",
    paddingTop: 60,
    padding: 12,
  },
  title: {
    fontSize: 30,
    fontFamily: "Inter_700Bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    marginVertical: 10,
    color: "#555",
  },
});

export default Challenges;
