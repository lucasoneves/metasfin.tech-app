import { Link, router } from "expo-router";
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
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return invalidFormAlert("Email é obrigatório");
    }

    if (!emailRegex.test(email)) {
      return invalidFormAlert("Email inválido");
    }
    if (!password) {
      return invalidFormAlert("Senha é obrigatória");
    }

    if (password.length < 6) {
      return invalidFormAlert("Senha deve ter no mínimo 6 caracteres");
    }

    setLoading(true);
    fetch("https://metasfin-tech-api.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    })
      .then(async (response) => {
        setLoading(false);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMsg =
            errorData?.message || "Erro ao cadastrar. Verifique seus dados";
          return invalidFormAlert(errorMsg);
        }
        // Sucesso: prossiga conforme necessário
        router.push("/login");
      })
      .catch((error) => {
        setLoading(false);
        invalidFormAlert("Erro de conexão. Tente novamente.");
      });
  };

  const invalidFormAlert = (message: string) =>
    Alert.alert("Erro no formulário", message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.text}>Preencha os dados para criar o acesso</Text>
        <View>
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
            onChangeText={(val) => setUsername(val)} // Use onChangeText for TextInput
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
            onPress={() => handleSignUp()}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <View style={styles.footerActions}>
            <Link
              href={"/auth/forgot-password"}
              style={styles.footerActionsText}
            >
              Esqueci minha senha
            </Link>
            <Link href={"/login"} style={styles.footerActionsText}>
              <Text>Já tenho cadastro</Text>
            </Link>
          </View>
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
  wrapper: {
    padding: 20,
    borderRadius: 12,
    gap: 12,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontFamily: "Inter_700Bold",
  },
  text: {
    fontSize: 18,
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
