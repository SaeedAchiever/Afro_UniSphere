import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shortsMainContainer: {
    // maxWidth: 1200,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "relative",
    alignSelf: "center",
    flex: 1,
  },
  shortsMenuContainer: {
    position: "absolute",
    left: "10%",
    top: 50,
    zIndex: 200,
    width: "70%",
    maxWidth: 700,
    height: 45,
    alignSelf: "center",
    backgroundColor: "rgba(234, 242, 227, 0.3)",
    borderRadius: 10,
  },
  searchVideos: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    paddingVertical: 5,
    color: "#555",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "400",
  },
  MenuBtnContainer: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
  },

  shortsVideoContainer: {
    zIndex: 999,
    height: "100%",
    width: "100%",
  },
  shortsVideo: {
    height: "100%",
    width: "100%",
  },
  InteractionsMainContainer: {
    position: "absolute",
    bottom: "20%",
    right: 0,
    zIndex: 100,
    width: "auto",
  },
  InteractionsContainer: {
    flexDirection: "column",
    gap: 15,
  },
  InteractionsButtonsContainer: {
    alignItems: "center",
    overflow: "hidden",
  },
  InteractionsButtons: {
    width: "100%",
    height: "65%",
  },
  InteractionsText: {
    color: "#fff",
    fontWeight: "bold",
  },
  showCommentsContainer: {
    width: "100%",
    bottom: 0,
    height: "74%",
    zIndex: 999,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.77)",
  },
  closeComments: {
    backgroundColor: "#cfcfcf",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: 30,
  },
  closeCommentsContainer: {
    width: "100%",
    height: "100%",
  },
  CommentsMainContaier: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  CommentsHeaderContaier: {
    borderBottomWidth: 1,
    borderColor: "lightblue",
    width: "100%",
    height: 30,
  },
  CommentsHeaderText: {
    paddingHorizontal: 20,
    fontWeight: "500",
    color: "#fff",
  },
  commentInputContainer: {
    height: 55,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderBottomWidth: 2,
    borderColor: "#333",
    paddingBottom: 10,
  },
  mainCommentsMainContainer: {
    marginVertical: 10,
    width: "95%",
    alignSelf: "center",
  },
  mainCommentsContainer: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    alignSelf: "center",
    alignContent: "center",
  },
  mainCommentsImageContainer: {
    width: 30,
    height: 30,
  },
  mainCommentsImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  mainCommentsTextContainer: {
    width: "90%",
  },
  mainCommentsUserContainer: {
    width: "70%",
    paddingVertical: 5,
    overflow: "hidden",
  },
  mainCommentsUserName: {
    color: "#fff",
    fontWeight: "400",
    letterSpacing: 0.3,
  },
  mainCommentsMainTextContainer: {
    width: "100%",
  },
  commenteactionsMainContainer: {
    marginTop: 4,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    gap: 20,
    flex: 1,
  },
  commenteactionsIconContainer: {
    gap: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  commenteactionsIcon: {
    width: 20,
    height: 20,
  },

  // USer
  UserMainContainer: {
    position: "absolute",
    width: "100%",
    bottom: 70,
    left: "10%",
    zIndex: 100,
  },
  UserProfileContainer: {
    width: "auto",
    maxWidth: 200,
    overflow: "hidden",
  },
  UserProfileSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    paddingVertical: 4,
  },
  UserProfileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  videoCaptionMainContainer: {
    width: "80%",
    maxHeight: 60,
    overflow: "hidden",
    marginRight: 20,
  },
  UserSubMainContainer: {
    gap: 10,
  },
  UserProfileImageContainer: {
    position: "relative",
  },
  followContainer: {
    position: "absolute",
    right: -7,
    bottom: -7,
  },
  followImage: {
    width: 30,
    height: 30,
  },
  UserName: {
    color: "#fff",
    fontWeight: "700",
  },

  // Search

  SearchMainContainer: {
    width: "100%",
    paddingHorizontal: 10,
    maxWidth: 1000,
    alignSelf: "center",
  },
  userPicContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  userPic: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  searchResultsContainer: {
    marginVertical: 2,
    marginHorizontal: 2,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  searchedVideoContainer: {
    width: "100%",
    height: "75%",
  },
  searchedVideo: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  searchedVideoInfoContainer: {
    width: "100%",
    height: "23%",
    alignSelf: "center",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  userInfooterContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignSelf: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  userInfooterImageContainer: {
    width: 50,
    height: 50,
  },
  userInfooterImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  accountName: {
    color: "#cfcfcf",
    fontSize: 15,
  },
  shortsFilterContainer: {
    width: "80%",
    maxWidth: 500,
    alignSelf: "center",
    flexDirection: "row",
    columnGap: 20,
    paddingVertical: 10,
  },
  searchedResultsFilterText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuOutputHeaderContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    gap: 10,
    alignItems: "center",
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 90,
    marginBottom: 40,
  },
  menuOutputSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: "100%",
    maxHeight: 100,
    borderRadius: 10,
    paddingLeft: 10,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  shortSearch: {
    width: "85%",
    height: "100%",
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  menuOutputSearchBtn: {
    width: "15%",
    height: "100%",
    backgroundColor: "lightblue",
    alignItems: "center",
  },
  SearchBtn: {
    width: "100%",
    height: "100%",
  },
  searchModalClose: {
    position: "absolute",
    top: 20,
    right: 40,
    width: 50,
    height: 50,
  },
});

export default styles;
