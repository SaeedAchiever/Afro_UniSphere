import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overviewMainContainer: {
    width: "100%",
    paddingBottom: 20,
  },
  overviewHeadTitleContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "7%",
    gap: 3,
    alignItems: "center",
    marginTop: 20,
  },
  overviewHeadImage: {
    width: 20,
    height: 20,
  },
  overviewHeadTitle: {
    fontSize: 18,
    textTransform: "capitalize",
    color: "#000",
  },
  overviewSmallTextContainer: {
    width: "97%",
    paddingLeft: "3%",
    paddingVertical: 11,
  },
  overviewSmall: {
    fontSize: 13,
    fontWeight: "500",
  },
  tableMainContainer: {
    display: "flex",
    width: "97%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    borderWidth: 1,
    alignContent: "center",
    alignSelf: "center",
  },
  tableRightContainer: {
    flex: 0.4,
    paddingVertical: 4,
    alignContent: "center",
  },
  tableTitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  linkTextContainer: {
    paddingTop: 10,
    width: "100%",
    paddingLeft: 20,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "500",
    color: "blue",
  },
  tableInnerText: {
    fontSize: 12.5,
    fontWeight: "500",
    paddingLeft: "3%",
  },
  overviewFactContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "4%",
    gap: 11,
    marginTop: 20,
  },
  factListImage: {
    width: 17,
    height: 17,
  },

  // admission Table Conatainer

  admissionTableContainer: {
    display: "flex",
    flexDirection: "row",
    width: 500,
    borderWidth: 1,
    justifyContent: "space-between",
    flex: 1,
    marginHorizontal: 5,
  },
  tableTitleContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 5,
  },
  tableBodyContainer: {
    borderTopWidth: 1,
    width: "100%",
    gap: 10,
    paddingBottom: 10,
  },
  admissionTableOneContainer: {
    flex: 0.45,
  },
  admissionTableTwoContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 0.275,
  },
  admissionTableThreeContainer: {
    flex: 0.275,
  },
  tableListContainer: {
    borderTopWidth: 1,
    height: 37,
  },
  tableList: {
    fontSize: 12,
    textAlign: "left",
    paddingLeft: 5,
    width: "100%",
    height: "100%",
  },

  // departmentMainContainer

  departmentMainContainer: {
    width: "100%",
    alignItems: "center",
    gap: 13,
    // marginBottom: 20,
  },
  // Degree type

  programsContainer: {
    borderBottomWidth: 1,
    width: "100%",
  },
  facultyMainContainer: {
    width: "100%",
    alignSelf: "auto",
    paddingVertical: 10,
    marginBottom: 20,
  },
  popularCOursesContainer: {
    width: "70%",
    alignSelf: "center",
    marginVertical: 20,
  },
  // New Course Here
  degreeTypeMainContainer: {
    flexDirection: "row",
    width: "95%",
    display: "flex",
    flexDirection: "row",
    gap: 0,
    marginVertical: 20,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 40,
  },
  degreeTypeSubContainers: {
    width: "33.5%",
    height: "auto",
  },
  degreeTypeCoursesTextContainer: {
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1.3,
    borderColor: "#333",
    height: 50,
    justifyContent: "center",
    backgroundColor: "rgba(73, 167, 29, 0.9)",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  degreeTypeCoursesText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  courseTypeNameContainer: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  courseTypeName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
  },
  courseTypeNumber: {
    fontSize: 13,
    color: "blue",
    fontWeight: "600",
  },
  courseTypenName: {
    borderBottomWidth: 1,
    paddingVertical: 5,
    gap: 1,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  // Popular course
  MainPopularContainer: {
    display: "flex",
    gap: "3%",
  },
  popularCourseMainContainer: {
    height: "auto",
    paddingVertical: 5,
    backgroundColor: "rgba(188, 193, 196, 0.3)",
    alignSelf: "center",
    maxWidth: 700,
  },
  popularCourseContainer: {
    width: "97%",
    alignSelf: "center",
  },
  popularCourseText: {
    color: "blue",
    fontSize: 18,
    fontWeight: "600",
  },
  popularCourseNormalContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "center",
    alignSelf: "center",
    paddingVertical: 10,
  },
  popularCourseMainBox: {
    width: "48%",
    flexDirection: "column",
    gap: 15,
  },
  popularCourseBox: {
    width: "100%",
    paddingVertical: 5,
    maxWidth: 320,
    maxHeight: 80,
    gap: 10,
  },
  popularCourseNormalText: {
    color: "#333",
    fontSize: 15,
    fontWeight: "500",
  },
  popularCourseOtherText: {
    color: "#555",
    fontSize: 13,
    fontWeight: "600",
    alignSelf: "flex-end",
    marginRight: "20%",
  },
  // Distance Learning

  distLernMainContainer: {
    width: "100%",
    justifyContent: "center",
    paddingTop: 10,
  },
  distLernSubContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    paddingTop: 20,
  },
  distLernSubBtn: {
    backgroundColor: "rgba(0,0,0,0.08)",
    paddingVertical: 8,
    width: 150,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 0.8,
    borderColor: "rgba(0,0,0,0.18)",
  },
  distLernSubBtnText: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    fontWeight: "500",
  },

  // Reviews

  scholarshipItemContainer: {
    flexDirection: "row",
    width: "95%",
    gap: 10,
    height: 170,
    borderWidth: 1.3,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 0.4,
    height: "100%",
  },
  scholarshipImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  scholarshipTextContainer: {
    flex: 0.6,
    alignSelf: "center",
    gap: 10,
  },
  scholarshipNoteTitle: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  scholarshipNote: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
  },
  schoolNoteMainContainer: {
    paddingTop: 20,
    width: "90%",
    alignSelf: "center",
    position: "relative",
    paddingVertical: 10,
  },
  noScholarshipText: {
    fontSize: 15,
    fontWeight: "500",
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
  searchBar: {
    fontSize: 15,
    fontWeight: "500",
    borderRadius: 10,
    paddingVertical: 5,
    color: "#333",
    width: "100%",
    borderWidth: 0,
    borderColor: "transparent",
  },
});

export default styles;
