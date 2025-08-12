import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const invalidFormAlert = (message: string) => {
    if (!isValidEmail(email)) {
      Alert.alert("Alerta", "Email inválido", [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
  };

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Metasfin.tech</Text>
      <Text style={styles.title}>Recuperação de senha</Text>
      <Text style={styles.text}>
        Preencha seu email para recuperar sua senha
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)} // Use onChangeText for TextInput
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => invalidFormAlert("Email inválido")}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: "Inter_700Bold",
  },
  form: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 8,
  },
  input: {
    marginVertical: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    borderColor: "#a3a3a3",
    fontSize: 16,
    borderRadius: 10,
    height: 46,
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    width: "100%",
    marginTop: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#1447e6",
    padding: 14,
    color: "white",
    borderRadius: 12,
    fontFamily: "Inter_400Regular",
  },
  footerActions: {
    flexDirection: "row",
    marginTop: 30,
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerActionsText: {
    color: "#1447e6",
    fontSize: 16,
  },
});

export default ForgotPassword;
