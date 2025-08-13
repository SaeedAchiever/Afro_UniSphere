import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainShopListContainer: {
    width: "100%",
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    gap: 20,
  },
  shopListItems: {
    margin: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 250,
  },
  mainShopListContainerHeader: {
    width: "85%",
    alignSelf: "center",
    paddingVertical: 15,
  },
  mainShopListContainerHeaderText: {
    fontSize: 18,
    fontWeight: "600",
  },
  shopListItemsImageContainer: {
    width: "100%",
    height: "70%",
    position: "relative",
  },
  shopListItemsImage: {
    width: "100%",
    height: "100%",
  },
  shopListItemsType: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "40%",
    height: "auto",
    borderRadius: 20,
    paddingHorizontal: 5,
    top: 10,
    left: 10,
  },
  ShopHeaderMainContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    marginBottom: 20,
  },
  ShopHeaderContainer: {
    width: "100%",
    maxWidth: 1200,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  ShopHeaderImage: {
    width: "100%",
    height: "80%",
  },
  ShopHeaderTextContainer: {
    width: "auto",
    paddingHorizontal: 30,
    height: "20%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
  ListImage: {
    width: "100%",
    height: "100%",
  },
  ListTextContainer: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 70,
    overflow: "hidden",
    padding: 5,
    height: "30%",
    gap: 5,
  },
  checkerMainContainer: {
    alignSelf: "center",
    marginBottom: 30,
    backgroundColor: "#000",
    paddingVertical: 10,
  },
  checkerContainer: {
    height: "100%",
    marginHorizontal: 10,
    justifyContent: "center",
    gap: 3,
  },
  checkerImageContainer: {
    width: "100%",
    height: "75%",
  },
  priceContainer: {
    width: "100%",
    height: "20%",
  },
  purchaseDetailsMainContainer: {
    paddingBottom: 20,
  },
  purchaseDetailsContainer: {
    alignSelf: "center",
    marginTop: 20,
    width: "100%",
    maxWidth: 500,
  },
  PurchaseDetailsText: {
    width: "100%",
    backgroundColor: "#333",
    alignContent: "flex-start",
    gap: 5,
    padding: 5,
    overflow: "hidden",
  },
  PurchaseDetails: {
    color: "#fff",
    fontSize: 13,
  },
  textInputContainer: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#333",
    alignSelf: "center",
    height: 40,
    borderRadius: 10,
  },
  textInput: {
    width: "90%",
    height: "100%",
    color: "#000",
    alignSelf: "center",
  },
  AllInputsContainer: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    gap: 20,
    marginTop: 20,
  },
});
export default styles;
