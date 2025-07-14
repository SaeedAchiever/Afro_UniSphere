import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  notsMainContainer: {
    width: "100%",
    height: "auto",
    flex: 1,
    maxWidth: 700,
  },
  modalButtonContainer: {
    position: "absolute",
    right: 10,
    top: 10,
    paddingBottom: 15,
  },
  modalButtonImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  notsHeader: {
    width: "100%",
    alignContent: "center",
    paddingVertical: 20,
  },
  notsHeaderText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
  },
  notsBody: {
    width: "100%",
    alignSelf: "center",
    maxWidth: 650,
    backgroundColor: "rgba(0,0,0,0.099)",
    paddingVertical: 20,
    marginTop: 10,
  },
  notsSubBody: {
    width: "91%",
    alignSelf: "center",
    gap: 4,
    overflow: "hidden",
  },
  notsBodyHeader: {
    width: "90%",
    alignSelf: "center",
  },
  notsBodyHeaderText: {
    fontSize: 15,
    fontWeight: "600",
  },
  notsBodyBody: {
    width: "100%",
  },
  notsBodyText: {
    fontSize: 13,
    fontWeight: "500",
  },
  notsBodyTime: {
    alignSelf: "flex-end",
    paddingVertical: 3,
  },
});

export default styles;
