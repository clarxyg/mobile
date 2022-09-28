import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 200,
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 30
  },
  text: {
    color: "#fff",
    marginHorizontal: 10,
  },
});
