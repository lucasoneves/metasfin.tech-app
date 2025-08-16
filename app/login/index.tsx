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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return invalidFormAlert("Email é obrigatório");
    }
    if (!password) {
      return invalidFormAlert("Senha é obrigatória");
    }

    if (!emailRegex.test(email)) {
      return invalidFormAlert("Email inválido");
    }

    if (password.length < 6) {
      return invalidFormAlert("Senha deve ter no mínimo 6 caracteres");
    }

    setLoading(true);
    fetch("https://metasfin-tech-api.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(async (response) => {
        setLoading(false);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMsg =
            errorData?.message ||
            "Erro ao fazer login. Verifique suas credenciais.";
          return invalidFormAlert(errorMsg);
        }
        // Sucesso: prossiga conforme necessário
        router.push("/challenges");
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
        style: "cancel",
      },
      { text: "OK", style: "default" },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>Preencha seu email e senha de acesso</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)} // Use onChangeText for TextInput
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(val) => setPassword(val)} // Use onChangeText and setPassword
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>
            {!loading ? "Entrar" : "Enviando..."}
          </Text>
        </TouchableOpacity>
        <View style={styles.footerActions}>
          {/* <Link href={"/auth/forgot-password"} style={styles.footerActionsText}>
            Esqueci minha senha
          </Link> */}
          <Link href={"/sign-up"} style={styles.footerActionsText}>
            Cadastre-se
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

export default Login;
