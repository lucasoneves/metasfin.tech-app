import CardMeta from "@/components/CardMeta";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const Challenges = () => {
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
