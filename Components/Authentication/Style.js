import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  LogInMainContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    gap: 40,
    flex: 1,
  },
  LogInContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  LogInWelcomeContainer: {
    width: "95%",
    alignItems: "center",
  },
  LogInWelcome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  LogInNote: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  inputIcons: {
    width: 20,
    height: 20,
  },
  inputIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "90%",
    maxWidth: 800,
    height: 50,
    backgroundColor: "rgba(226, 240, 231, 0.47)",
    paddingHorizontal: 10,
    overflow: "hidden",
    borderRadius: 5,
  },
  login_psswdreset: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    gap: 10,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-around",
    position: "relative",
  },
  password_resetcontainer: {
    marginTop: 30,
  },
  logInBtn: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop:20,
    width: "30%",
    borderWidth: 2,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    minWidth: 120,
    maxWidth: 200,
    borderColor: "#fff",
  },
  logInBtnText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  logInSignUpContainer: {
    width: "80%",
    flexDirection: "row",
    gap: 7,
    alignItems:'center'
  },
  logInSignUpText: {
    fontSize: 15,
    color: "#333",
    color: "#fff",
  },
  sociallogIn: {
    width: "100%",
    height: "auto",
  },
  sociallogInbtn: {
    width: "90%",
    alignSelf: "center",
    maxWidth: 570,
    borderWidth: 1.4,
    borderColor: "gold",
    height: 44,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  logInSignUpBtnText: {
    color: "#fff",
    fontSize: 15,
  },
  logInAsGuestContainer: {
    alignSelf: "center",
    marginTop: 10,
  },
  logInAsGuestText: {
    fontSize: 15,
    fontWeight: "light",
    color: "midnightblue",
    textTransform: "capitalize",
    color: "#fff",
  },
  LogInOptionsMainContainer: {
    width: "70%",
    gap: 6,
  },
  LogInOptionsContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 10,
  },
  LogInOptionsMainText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },
  LogInOptionsSubContainer: {
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  LogInOptionsText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  logInBtnalt:{
    borderWidth:1.2,
    borderColor:'#fcfccf',
    paddingVertical:3,
    paddingHorizontal:15
  },
  preloaderCtn:{
    position:'absolute',
    top:'50%',
    width:'100%',
    alignSelf:'center'
  }
});

export default styles;
