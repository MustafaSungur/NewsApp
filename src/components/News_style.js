import { StyleSheet, Dimensions } from "react-native";
export default styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 5,
  },
  inner_content: {
    padding: 13,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  content: {
    fontSize: 18,
  },
  image: {
    height: Dimensions.get("window").height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  author: {
    textAlign: "right",
    fontStyle: "italic",
    marginTop: 2,
  },
});
