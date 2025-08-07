import { Link } from "expo-router";
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };

  const invalidFormAlert = (message: string) =>
    Alert.alert("Alert Title", message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Metasfin.tech</Text>
      <Text style={styles.title}>Cdastre-se</Text>
      <Text style={styles.text}>Preencha os dados para criar o acesso</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)} // Use onChangeText for TextInput
        />
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={(val) => setEmail(val)} // Use onChangeText for TextInput
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(val) => setPassword(val)} // Use onChangeText and setPassword
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => invalidFormAlert("Form inválido")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.footerActions}>
          <Link href={"/auth/forgot-password"} style={styles.footerActionsText}>
            Esqueci minha senha
          </Link>
          <Link href={"/login"} style={styles.footerActionsText}>
            <Text>Já tenho cadastro</Text>
          </Link>
        </View>
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

export default SignUp;
