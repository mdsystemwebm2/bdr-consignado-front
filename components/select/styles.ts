import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {},
  selectBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    height: 44,
    paddingHorizontal: 12,
  },
  selectedText: {
    color: "#fff",
    fontSize: 14,
  },
  dropdown: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    backgroundColor: "#2C2C2C",
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionSelected: {},
  optionText: {
    color: "#fff",
    fontSize: 14,
  },
  optionTextSelected: {
    fontWeight: "bold",
    color: "#00D1FF",
  },
});
