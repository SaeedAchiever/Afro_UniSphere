import { StyleSheet, Platform, usw } from "react-native";
// const deviceWidth = useWindowDimensions().width;

const styles = StyleSheet.create({
  allHomeContainer: {
    width: "100%",
    paddingBottom: 50,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  HomeContainer: {
    backgroundColor: "#fff",
  },

  // MENU BUTTON

  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  // HEADER MODAL

  modalMainContainer: {
    width: "90%",
    height: "100%",
    position: "relative",
    paddingVertical: 5,
    borderRightWidth: 1,
    borderColor: "lightblue",
    backgroundColor: "rgba(232, 217, 241, 0.3)",
    borderTopRightRadius: 20,
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
  },
  ModalBodyMainContainer: {
    paddingTop: 50,
    width: "100%",
    alignItems: "flex-start",
  },
  ModalBodyContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    gap: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "lightblue",
    position: "relative",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  setgoalContainer: {
    display: "flex",
    position: "absolute",
    right: 20,
    bottom: 10,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
  },
  setgoalText: {
    fontSize: 12,
    fontWeight: "600",
  },
  modalUserText: {
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0.3,
    textTransform: "capitalize",
  },
  modalUserImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 15,
  },
  modalLinksMainContainer: {
    width: "100%",
    gap: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  modalLinksContainer: {
    width: "auto",
    paddingVertical: 1,
  },
  modalLinksText: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },

  // FOOTER

  footerMainContainer: {
    ...Platform.select({
      web: {
        display: "none",
      },
      default: {
        position: "absolute",
        bottom: 0,
        flex: 1,
        left: 0,
        width: "100%",
        height: 40,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "lightblue",
        zIndex: 10,
      },
    }),
  },
  footerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },
  footerBox: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  footerImage: {
    width: "100%",
    height: "60%",
  },

  SwitchContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    position: "absolute",
    zIndex: 100,
    backgroundColor: "rgba(243, 232, 232, 0.7)",
    width: "100%",
    height: 40,
    alignItems: "center",
    maxWidth: 900,
    alignSelf: "center",
  },
  SwitchContainerBTN: {
    borderColor: "#000",
    paddingBottom: 7,
    paddingHorizontal: 7,
  },
  SwitchContainerText: {
    fontSize: 13,
    fontWeight: "900",
    color: "#333",
    letterSpacing: 1,
  },

  //  RECOMMENDATIONS

  recommendationMainContainer: {
    width: "100%",
    maxWidth: 1000,
    alignSelf: "center",
    flexDirection: "column",
    height: "auto",
    gap: 10,
    marginTop: 30,
  },
  recommendationHeadContainer: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    paddingBottom: 10,
  },
  recommendationHeadText: {
    textTransform: "capitalize",
    fontWeight: "500",
    color: "#000",
  },
  recommendationContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderColor: "lighblue",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    alignSelf: "center",
    gap: 10,
    // width: "100%",
    maxWidth: 1000,
    alignSelf: "center",
  },
  recommendationTextContainer: {
    flexDirection: "column",
    width: "60%",
    height: "100%",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 20,
  },
  recommendationTextName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
  },
  recommendationTextHead: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
  },
  recommendationTextFee: {
    fontSize: 11,
    fontWeight: "500",
  },
  recommendationLocation: {
    width: 15,
    height: 15,
  },
  recommendationTextRate: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    paddingTop: 10,
  },
  recommendationImageContainer: {
    width: "35%",
    height: "100%",
  },
  recommendationImage: {
    width: "100%",
    height: "100%",
  },

  // TOP PLACES  TO  STUDY

  topPlaceMainContainer: {
    width: "100%",
    maxWidth: 900,
    height: "auto",
    alignSelf: "center",
    marginTop: 70,
  },
  topPlaceContainer: {
    width: "95%",
    flexDirection: "row",
  },
  placeContainer: {
    width: 150,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginHorizontal: 5,
  },
  topPlaceImage: {
    width: "100%",
    height: "85%",
  },

  // PREFERANCE

  userPreferenceBodyContainer: {
    flexDirection: "column",
    width: "97%",
  },
  userPreferenceSubBodyContainer: {
    flexDirection: "row",
    // flex: 1,
    backgroundColor: "rgba(0,0,0,0.09)",
    marginBottom: 10,
    width: "90%",
    alignSelf: "center",
  },
  userPreferenceSubBodyTextCont: {
    flex: 0.6,
    alignContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 10,
    justifyContent: "center",
  },
  userPreferenceSubBodyTextContTwo: {
    marginTop: "6%",
    alignItems: "center",
    marginBottom: 10,
  },
  userPreferenceSubBodyText: {
    fontSize: 13,
    letterSpacing: 0.5,
  },
  prefRevContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
  },

  userPreferenceSubBodyBtn: {
    borderWidth: 1.2,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: "rgba(50,50,100,0.9)",
    maxWidth: 120,
    marginLeft: 10,
  },
  userPreferenceSubBodyBtnText: {
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
  },
  userPreferenceSubBodyImageCont: {
    flex: 0.4,
  },
  userPreferenceImage: {
    width: "100%",
    height: "100%",
  },

  //       // UniversityHome  STYLE

  uniHeader: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    alignSelf: "center",
  },
  logoContainer: {
    width: "80%",
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logoName: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  filterImage: {
    width: 30,
    height: 30,
  },
  searchBarContainer: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: "rgba(0,0,0,0.09)",
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 15,
    paddingLeft: 20,
  },
  searchBack: {
    width: 30,
    height: 30,
  },
  searchBar: {
    fontSize: 15,
    fontWeight: "400",
    borderRadius: 10,
    paddingVertical: 5,
    color: "#333",
    width: "85%",
  },
  searchContainer: {
    width: "100%",
    zIndex: 100,
    paddingVertical: 20,
    height: "auto",
    minHeight: 10,
  },
  searchListContainer: {
    width: "95%",
    alignSelf: "center",
    paddingVertical: 5,
    marginVertical: 5,
  },
  searchListText: {
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#333",
  },
  UniHeadName: {
    fontSize: 17,
    fontWeight: "600",
    padding: 8,
    letterSpacing: 0.4,
  },
  mainUniversHeaderTextContainer: {
    padding: 10,
  },
  UniHomeHeadImage: {
    width: "90%",
    alignSelf: "center",
    lineHeight: 20,
    marginBottom: 10,
  },
  UniSubInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
  },
  UniLocation: {
    width: 17,
    height: 17,
  },
  UniName: {
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: "500",
    paddingBottom: 2,
  },
  UniHeadContainer: {
    width: "100%",
  },

  uniMainButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 13,
  },
  uniMainButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  uniMainButton: {
    borderWidth: 1.2,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    width: "80%",
    backgroundColor: "rgba(20,120,20,0.22)",
  },
  uniMainButtonText: {
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  // COLLEGES  HERE

  mainCollegeContainer: {
    width: "100%",
    paddingVertical: 5,
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  collegeContainer: {
    width: "96%",
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "lightblue",
    paddingLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  collegeTextContainer: {
    width: "67%",
  },
  collegeTextName: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
  },
  collegeTextInfo: {
    fontSize: 11,
    fontWeight: "400",
  },
  collegeImageContainer: {
    width: "30%",
  },
  collegeImage: {
    width: "100%",
    height: 140,
  },
  collegeButtonContainer: {
    flexDirection: "row",
    marginTop: 7,
    justifyContent: "space-around",
  },

  // HOME SCHOLARSHIP

  HomeMainScholarshipContainer: {
    paddingVertical: 10,
    width: "100%",
    gap: 20,
  },
  HomeScholarshipHeaderContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
  HomeScholarshipHeaderImageContainer: {
    paddingHorizontal: 5,
  },
  HomeScholarshipHeaderImage: {
    width: 23,
    height: 23,
  },
  HomeScholarshipHeaderText: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "capitalize",
    opacity: 0.8,
  },
  ScholarshipScrolls: {
    width: 230,
    height: 150,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 5,
  },
  ScholarshipBox: {
    width: "90%",
    height: "70%",
    backgroundColor: "rgba(0,0,0,0.05)",
    alignSelf: "center",
    alignContent: "center",
    marginBottom: 10,
    alignItems: "center",
  },
  ScholarImage: {
    width: "100%",
    height: "100%",
  },
  ScholarshipBodyTextContainer: {
    width: "90%",
  },
  ScholarshipBodyText: {
    fontSize: 12,
    fontWeight: "300",
    paddingLeft: 7,
  },

  // MAIN UNI HOME

  UniHomeMainContainer: {
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "rgba(0,0,0,0.071)",
    alignItems: "center",
    zIndex: 1,
  },
  UniHomeContainer: {
    paddingBottom: 7,
    width: "94%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "rgba(0,0,0,0.055)",
  },
  UniHomeImageContainer: {
    width: "100%",
    alignItems: "center",
  },
  UniHomeImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 1,
  },
  UniHomeTextContainer: {
    width: "85%",
    paddingVertical: 5,
    textAlign: "left",
  },
  UniHomeText: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.4,
  },
  uniMainHomeLocNCampContainer: {
    width: "60%",
    flexDirection: "row",
    paddingVertical: 3,
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  uniMainHomeLocContainer: {
    flexDirection: "row",
    gap: 3,
  },
  uniMainHomeLocImageContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
  },
  uniMainHomeLocImage: {
    width: "80%",
    height: "80%",
  },
  uniMainHomeLocText: {
    fontSize: 13,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  uniMainHomeReviewContainer: {
    width: "90%",
    flexDirection: "row",
    paddingVertical: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  uniMainHomeReviewImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: -4,
  },
  Revstar: {
    width: 15,
    height: 15,
  },
  uniMainHomeReviewTextContainer: {
    marginLeft: 6,
  },
  uniMainHomeReviewText: {
    fontSize: 13,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  reviewButton: {
    paddingHorizontal: 6,
    marginHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  ReadButton: {
    marginTop: 15,
    paddingVertical: 6,
    borderWidth: 1.3,
    width: "70%",
    alignSelf: "center",
    marginLeft: "5%",
    borderRadius: 5,
    borderColor: "purple",
    backgroundColor: "rgba(120,20,20,0.053)",
  },
  ReadButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.6,
  },
  FilterPageUniContainer: {
    width: "95%",
    maxWidth: 900,
    height: "auto",
    backgroundColor: "rgba(90, 100, 0, 0.08)",
    marginTop: 20,
    alignSelf: "center",
    paddingVertical: 20,
  },
  FilterPageUniHeaderContainer: {
    flexDirection: "column",
    width: "auto",
  },
  FilterPageUniHeaderNameContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  FilterPageUniHeaderNameText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
    letterSpacing: 0.3,
  },
  FilterBothContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "5%",
    gap: 20,
    borderBottomWidth: 1.5,
    borderColor: "lightblue",
    borderStyle: "dashed",
    paddingBottom: 20,
    alignSelf: "center",
    paddingVertical: 10,
  },
  FilterPageUniHeaderLocationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingRight: 7,
    borderRightWidth: 1.5,
    borderColor: "#888",
  },
  FilterPageUniHeaderLocationImage: {
    width: 15,
    height: 19,
  },
  FilterPageUniHeaderLocationText: {
    fontSize: 10,
    fontWeight: "500",
  },
  FilterPageUniHeaderRatingContainer: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 5,
    alignItems: "center",
    borderRightWidth: 1.5,
    borderColor: "#888",
  },
  FilterPageUniHeaderRatingImageContainer: {
    flexDirection: "row",
    gap: 0,
  },
  FilterPageUniHeaderRateText: {
    fontSize: 12,
    fontWeight: "bold",
    paddingRight: 10,
    textTransform: "capitalize",
  },
  FilterCourseFeesMainContainer: {
    width: "95%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderColor: "lightblue",
    borderStyle: "dashed",
  },
  FilterCourseFeesContainer: {
    gap: 8,
    alignItems: "center",
  },
  FilterCourseFeesHeadText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    letterSpacing: 1,
  },
  FilterCourseFeesText: {
    fontSize: 13,
    fontWeight: "500",
  },
  FilterAdmissionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "5%",
  },

  //  Updates

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
  },
  updatesHeadMainContainer: {
    height: "auto",
  },
  updatesHeaderTextContainer: {
    width: "100%",
    paddingTop: 15,
    alignSelf: "center",
  },
  updatesHeaderText: {
    fontSize: 15,
    fontWeight: "500",
  },
  updatesContainer: {
    gap: 7,
  },
  updatesBodyMainContainer: {
    // gap: 17,
    alignSelf: "center",
    margin: 10,
    justifyContent: "flex-start",
    width:'95%'
  },
  NewsBGImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  updatesBodyContainer: {
    width: "100%",
    height: "30%",
    alignSelf: "center",
    paddingHorizontal: "2%",
    gap: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  updatesBodyHeadText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#fff",
    paddingLeft: 10,
  },

  // Desired  Course

  scrollBodyContainer: {
    width: 210,
    height: 130,
    borderColor: "#cfcfcf",
    borderWidth: 1.5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "rgba(0,0,200,0.05)",
    borderRadius: 10,
    gap: 5,
    justifyContent: "center",
  },
  scrollBodyDistText: {
    fontSize: 10,
  },
  scrollBodyCourseText: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  scrollUniAvailContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
  },
  myMatchContainer: {
    width: "90%",
    alignSelf: "center",
    maxWidth: 700,
    backgroundColor: "rgba(0,0,0,0.07)",
    paddingHorizontal: 20,
    alignSelf: "center",
    paddingVertical: 20,
    gap: 10,
    marginTop: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#555",
    margin: 30,
    position: "relative",
  },
  myMatchText: {
    fontSize: 13,
    fontWeight: "500",
  },
  myMatchBtn: {
    alignSelf: "flex-end",
    borderWidth: 1.3,
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.09)",
  },
  myMatchBtnText: {
    fontSize: 15,
    fontWeight: "700",
  },
  listButton: {
    width: "85%",
    paddingVertical: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.09)",
  },
  listButtonText: {
    fontSize: 17,
    fontWeight: "500",
  },
  collegeOptionsMainContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  collegeOptionsContainer: {
    minWidth: 140,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "lightblue",
  },
  collegeOptions: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
  },
  logOutContainer: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    left: "75%",
  },
  logOutText: {
    fontSize: 15,
    fontWeight: "700",
  },
  applicationImageContainer: {
    width: "100%",
  },
  Applicant: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  allschoolsHome: {
    maxWidth: 1200,
    width: "100%",
    alignSelf: "center",
  },
});

export default styles;
