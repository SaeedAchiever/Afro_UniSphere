import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  User_ProfileMainContainer: {
    width: "100%",
    // marginBottom:50,
    backgroundColor: "rgba(0,0,0,0.9)",
    flex: 1,
    maxWidth: 9000,
    alignSelf: "center",
  },
  profileHeaderMainContainer: {
    width: "100%",
    position: "relative",
  },
  profileHeaderUserBGContainer: {
    width: "90%",
    alignSelf: "center",
    maxWidth: 700,
    marginVertical: 10,
  },
  profileHeaderUserBGImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  MainUserImageMainContainer: {
    width: "90%",
    alignSelf: "center",
    maxWidth: 700,
    flexDirection: "row",
    gap: 20,
  },
  MainUserImageContainer: {
    maxWidth: 120,
    height: 100,
    position: "relative",
  },
  editProfile: {
    width: "30%",
    height: "100%",
    backgroundColor: "rgba(207, 207, 207, 0.8)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  editProfileText: {
    fontSize: 13,
    fontWeight: "700",
  },
  MainUserImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  profileHeaderUserNameContainer: {
    width: "100%",
    alignSelf: "center",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 35,
    alignItems: "center",
  },
  profileHeaderUserName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#cfcfcf",
    width: "65%",
    height: "100%",
    overflow: "hidden",
  },
  MainUserInfo: {
    marginTop: 50,
    gap: 5,
    overflow: "hidden",
  },
  MainUserInfoText: {
    color: "#cfcfcf",
  },
  MainUserFanNVidContainer: {
    flexDirection: "row",
    gap: 10,
  },
  UserBioContainer: {
    marginTop: 15,
    width: "95%",
    alignSelf: "center",
  },
  UserBio: {
    fontSize: 12,
    color: "lightblue",
    fontWeight: "thin",
    letterSpacing: 0.5,
  },
  UserBioButtonContainer: {
    marginVertical: 10,
    width: "80%",
    maxWidth: 700,
    alignSelf: "center",
    backgroundColor: "rgba(120, 40, 120, 0.7)",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  UserBioBtn: {
    fontSize: 15,
    color: "#cecece",
    fontWeight: "700",
  },
  EditProfileMainContainer: {
    width: "95%",
    maxWidth: 850,
    alignSelf: "center",
    marginTop: 50,
  },
  EditProfileHeaderContainer: {
    gap: 0,
  },
  EditProfileBodyContainer: {
    width: "95%",
    alignSelf: "flex-start",
    marginVertical: 10,
    gap: 10,
  },
  EditProfileTextContainer: {
    borderWidth: 1,
    width: "100%",
    height: 35,
    borderColor: "rgba(200, 200, 200, 1)",
    alignContent: "center",
    borderRadius: 5,
  },
  EditProfileTextInput: {
    textAlign: "left",
    paddingHorizontal: 10,
    overflow: "hidden",
    fontSize: 14,
    height: "100%",
    fontWeight: "600",
  },
  saveBtn: {
    marginTop: 10,
    alignSelf: "flex-end",
    paddingHorizontal: 27,
    borderWidth: 1.4,
    paddingVertical: 5,
    borderRadius: 5,
  },
  saveBtnText: {
    fontSize: 15,
    fontWeight: "600",
  },
});

export default styles;
