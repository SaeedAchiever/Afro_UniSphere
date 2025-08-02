import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  webAppContainer: {
    position: "absolute",
    width: "60%",
    maxWidth: 400,
    height: 600,
    top: 40,
    right: "5%",
    zIndex: 1
  },
  menuContainer: {
    width: 50,
    height: 50,
    alignSelf: "flex-end",
    backgroundColor: "rgba(241, 224, 224, 0.5)",
  },
  menu: {
    width: "100%",
    height: "100%",
  },
  menuLinksContainer: {
    paddingVertical: 40,
    width: "100%",
    height: "auto",
    backgroundColor: "rgba(44, 36, 36, 0.9)",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  appLinksContainer: {
    width: "100%",
    alignItems: "center",
  },
  appLinkSubContainer: {
    gap: 10,
    paddingVertical: 10,
  },
  menuLinksText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});
export default styles;
