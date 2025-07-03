import FontAwesome from "@expo/vector-icons/FontAwesome";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CardMeta = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        <Text style={styles.textBold}>Carro novo</Text>
      </Text>
      <Text style={styles.text}>
        Saldo: <Text style={styles.textBold}>R$ 1.529,26</Text>
      </Text>
      <View>
        <Text style={[styles.text, styles.textGray, styles.textSmall]}>
          Meta: R$ 60.000,00
        </Text>
        <View style={styles.progressBar}>
          <View style={styles.progressBarAmount}></View>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text, styles.textSmall, styles.buttonText]}>
            Novo aporte
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <FontAwesome name="pencil-square-o" size={18} color="black" />
          <Text style={[styles.text, styles.textSmall]}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <FontAwesome name="trash-o" size={18} color="black" />
          <Text style={[styles.text, styles.textSmall]}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fafafa",
    boxShadow: "1px 1px 1px #ccc",
    padding: 20,
    gap: 10,
    borderRadius: 12,
  },
  title: {
    fontSize: 26,
    fontFamily: "Inter_400Regular",
  },
  text: {
    fontSize: 18,
    fontFamily: "Inter_400Regular",
  },
  textBold: {
    fontWeight: "bold",
    fontFamily: "Inter_400Regular",
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
  button: {
    backgroundColor: "#1447e6",
    padding: 12,
    textAlign: "center",
    flex: 1,
    width: "100%",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  buttonText: {
    color: "white",
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

export default CardMeta;
