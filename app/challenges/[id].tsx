import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChallengeDetail = () => {
  const [challengeName, setChallengeName] = useState("Carro novo");
  const [goalAmount, setGoalAmount] = useState("6000000"); // R$ 60.000,00
  const [currentAmount, setCurrentAmount] = useState("152926"); // R$ 1.529,26
  const [description, setDescription] = useState(
    "Economize para a compra do seu carro novo"
  );
  const formatCurrency = (valueInCents: string) => {
    if (!valueInCents) {
      return "R$ 0,00";
    }
    const numericValue = Number(valueInCents) / 100;
    return numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleAmountChange = (
    text: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(text.replace(/\D/g, ""));
  };

  return (
    <SafeAreaView style={styles.card}>
      <Text style={styles.title}>
        <Text style={styles.textBold}>Editar desafio</Text>
      </Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          value={challengeName}
          style={styles.textInput}
          onChangeText={(text) => setChallengeName(text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Meta:</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          value={formatCurrency(goalAmount)}
          onChangeText={(text) => handleAmountChange(text, setGoalAmount)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Valor atual:</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          value={formatCurrency(currentAmount)}
          onChangeText={(text) => handleAmountChange(text, setCurrentAmount)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={[styles.textInput, styles.textArea]}
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 10,
    borderRadius: 12,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 26,
    fontFamily: "Inter_400Regular",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: "Inter_400Regular",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top", // Para começar o texto do topo
    paddingTop: 12, // Compensar pela altura menor
  },
  textBold: {
    fontWeight: "bold",
    fontFamily: "Inter_400Regular",
  },
  button: {
    backgroundColor: "#1447e6",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  textGray: {
    color: "#777",
  },
  textSmall: {
    fontSize: 14,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  buttonIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#ebe6e7",
    marginTop: 4,
    marginBottom: 10,
  },
  progressBarAmount: {
    width: "50%",
    height: 10,
    backgroundColor: "#00a63e",
    borderRadius: 12,
  },
});

export default ChallengeDetail;
