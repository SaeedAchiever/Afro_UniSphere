import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  updatesMainContainer: {
    // flex: 1,
    backgroundColor: "#e7d9d9ff",
    maxWidth: 1300,
    alignSelf: "center",
  },
  updatesHeadMainContainer: {
    width: "100%",
    maxWidth: 1000,
    minHeight: 250,
    alignSelf: "center",
  },
  updatesHeaderContainer: {
    width: "100%",
    maxWidth: 1000,
    minHeight: 250,
    maxHeight: 400,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  updatesHeaderImageContainer: {
    width: "100%",
    height: "75%",
    maxHeight: 350,
    alignItems: "center",
  },
  updatesHeaderImage: {
    width: "100%",
    height: "100%",
  },
  updatesHeaderTextContainer: {
    width: "95%",
    paddingTop: 15,
    alignSelf: "center",
    gap: 10,
  },
  updatesHeaderText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#555",
  },
  updatesHeaderDate: {
    fontStyle: "italic",
    fontSize: 14,
    paddingLeft: 20,
    fontWeight: "500",
    color: "#000",
  },
  updatesContainer: {
    marginBottom: 50,
    gap: 20,
  },
  updatesMainBodyContainer: {
    width: "100%",
    paddingVertical: 10,
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom:30
  },
  updatesListContainer: {
    width: "95%",
    maxWidth: 1000,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  updatesListSubContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  updatesListImageContainer: {
    width: 15,
    height: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  updatesListImage: {
    width: "100%",
    height: "100%",
  },
  updatesListTextContainer: {
    width: "auto",
    height: "auto",
  },
  updatesListText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "italic",
    flexShrink: 1,
    flexWrap: "wrap",
  },
});

export default style;
