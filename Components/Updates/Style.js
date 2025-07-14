import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  updatesHeaderContainer: {
    width: "100%",
    maxWidth: 500,
    minHeight: 250,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  updatesHeaderImageContainer: {
    width: "100%",
    height: 130,
  },
  updatesHeaderImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  updatesHeadMainContainer: {
    height: "auto",
  },
  updatesHeaderTextContainer: {
    width: "95%",
    paddingTop: 15,
    alignSelf: "center",
  },
  updatesHeaderText: {
    fontSize: 15,
    fontWeight: "500",
  },
  updatesContainer: {
    marginBottom: 50,
    gap: 20,
  },
  updatesBodyMainContainer: {
    width: "100%",
    paddingVertical: 10,
  },
  updatesBodyContainer: {
    width: "95%",
    height: "100%",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: "2%",
    gap: 15,
    backgroundColor: "rgba(172, 88, 197, 0.97)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  updatesBodyHeadText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#fff",
    paddingLeft: 10,
    height: "60%",
  },
  updatesBodyText: {
    fontSize: 11,
    fontWeight: "400",
    color: "#fff",
    height: "40%",
  },
});

export default style;
