import { useRouter } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Bem-vindo(a)! ao <Text style={styles.titleBold}>Metasfin.tech</Text>
        </Text>
        <Text style={styles.text}>
          Organize suas finanças, estabeleça metas claras e acompanhe seu
          progresso para alcançar seus objetivos.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("/login");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#444",
    fontFamily: "Inter_400Regular",
  },
  titleBold: {
    fontFamily: "Inter_700Bold",
  },
  text: {
    fontSize: 18,
    color: "#555",
    marginVertical: 20,
    fontFamily: "Inter_400Regular",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    flexDirection: "row",
  },
  wrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#1447e6",
    padding: 14,
    color: "white",
    borderRadius: 12,
    fontFamily: "Inter_400Regular",
  },
});
