import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shortsMainContaner:{
    maxWidth:9000,
    width:'100%',
    backgroundColor:'rgba(0,0,0,0.3)',
    position:'relative'
  },
  shortsMenuContainer:{
    position:'absolute',
    right:20,
    top:20,
    zIndex:200,
  },
  shortsMenu:{
    width:'100%',
    height:'100%',
    resizeMode:'cover'
  },
  MenuBtnContainer:{
    alignSelf:'center',
    width:'100%',
    alignItems:'center',
  }
  
  ,
  shortsVideoContainer:{
    backgroundColor:'rgba(0,0,0,0.9)',
    zIndex:1
  },
  shortsVideo:{
    height:'100%',
    width:'100%'
  },
  InteractionsMainContainer:{
    position:'absolute',
    bottom:"20%",
    right:0,
    zIndex:100,
    width:'auto',
    // backgroundColor:'#000'
  },
  InteractionsContainer:{
    flexDirection:'column',
    gap:10
  },
  InteractionsButtonsContainer:{
    alignItems:'center',
    overflow:'hidden'
  },
  InteractionsButtons:{
    width:'65%',
    height:'65%'
  },
  InteractionsText:{
    color:'#fff',
    fontWeight:'bold'
  },
  showCommentsContainer:{
    width:'100%',
    bottom:0,
    height:'70%',
    zIndex:200,
    position:'absolute',
    backgroundColor:'rgba(0,0,0,0.77)'
  },
  CommentsMainContaier:{
    width:'100%',
    height:'100%',
    position:'relative',
  },
  CommentsHeaderContaier:{
    borderBottomWidth:1,
    borderColor:'lightblue',
    width:'100%',
    height:30
  },
  CommentsHeaderText:{
    paddingHorizontal:20,
    fontWeight:'500',
    color:'#fff'
  },
  commentInputContainer:{
    height:55,
    width:'100%',
    alignContent:'center',
    alignItems:'center',
    marginTop:10,
    borderBottomWidth:2,
    borderColor:'#333',
    paddingBottom:10
  },
  mainCommentsMainContainer:{
    marginVertical:10,
    width:'95%',
    alignSelf:'center'
  },
  mainCommentsContainer:{
    flexDirection:'row',
    gap:10,
    width:'100%',
    alignSelf:'center',
    alignContent:'center'
  },
  mainCommentsImageContainer:{
    width:30,
    height:30
  },
  mainCommentsImage:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    borderRadius:50
  },
  mainCommentsTextContainer:{
    width:'90%',
  },
  mainCommentsUserContainer:{
    width:'70%',
    paddingVertical:5,
    overflow:'hidden',
  },
  mainCommentsUserName:{
    color:'#fff',
    fontWeight:'400',
    letterSpacing:0.3
  },
  mainCommentsMainTextContainer:{
    width:'100%',
  },
  commenteactionsMainContainer:{
    marginTop:4,
    width:'90%',
    alignSelf:'center',
    flexDirection:'row',
    gap:20,
    flex:1
  },
  commenteactionsIconContainer:{
    gap:3,
    flexDirection:'row',
    alignItems:'center'
  },
  commenteactionsIcon:{
    width:20,
    height:20,
    resizeMode:'cover'
  },

  // USer
  UserMainContainer:{
    position:'absolute',
    width:'100%',
    bottom:70,
    left:'10%',
    zIndex:100,
  },
  UserProfileContainer:{
    width:'auto',
    maxWidth:200,
    overflow:'hidden',
  },
  UserProfileSubContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    width:'100%',
    paddingVertical:4
  },
  UserProfileImage:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    borderRadius:50
  },
  videoCaptionMainContainer:{
    width:'80%',
    maxHeight:60,
    overflow:'hidden',
    marginRight:20,
  },
  UserSubMainContainer:{
    gap:10
  },
  UserProfileImageContainer:{
    position:'relative'
  },
  followContainer:{
    position:'absolute',
    right:-7,
    bottom:-7
  },
  followImage:{
    width:30,
    height:30
  },
  UserName:{
    color:'#fff',
    fontWeight:'700'
  }

 // Search

 ,SearchMainContainer:{
  width:'100%',
  // flexDirection:'row',
  paddingHorizontal:10,
 },
 searchResultsContainer:{
  marginVertical:2,
  marginHorizontal:2,
  backgroundColor:"rgba(0,0,0,0.3)",
 },
 searchedVideoContainer:{
  width:'100%',
  height:'79%',
 },
 searchedVideo:{
  width:'100%',
  height:'100%',
  resizeMode:'cover',
  alignSelf:'center'
 },
 searchedVideoInfoContainer:{
  width:'95%',
  height:'20%',
  alignSelf:'center',
  flexWrap:'wrap',
  overflow:'hidden',
 },
 shortsFilterContainer:{
  width:'80%',
  maxWidth:500,
  alignSelf:'center',
  flexDirection:'row',
  columnGap:20,
  paddingVertical:10
 },
 searchedResultsFilterText:{
  fontSize:15,
  fontWeight:'condensedBold'
 },
 menuOutputHeaderContainer:{
  flexDirection:'row',
  width:'100%',
  gap:10,
  marginTop:20,
  alignItems:'center',
  height:40,
  // backgroundColor:'#000',
 },
 menuOutputSearchContainer:{
  flexDirection:'row',
  alignItems:'center',
  width:"90%",
  height:'100%',
  maxHeight:100,
  borderRadius:10,
  paddingLeft:10,
  overflow:'hidden',
  backgroundColor:'rgba(0,0,0,0.4)',
 },
 shortSearch:{
  width:'85%',
  height:'100%',
  color:'#fff',
 },
 menuOutputSearchBtn:{
  width:'15%',
  height:'100%',
  backgroundColor:'lightblue',
  alignItems:'center',
 },
 SearchBtn:{
  width:'100%',
  height:'50%',
  resizeMode:'center',
  paddingVertical:10,
  justifyContent:'center',
  flex:1
 },
 playPauseButton: {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: [{ translateX: -25 }, { translateY: -25 }], // Center the button
  zIndex: 10,
},

playPauseIcon: {
  width: 50,
  height: 50,
  tintColor: 'white', // Optional, for styling
},

})

export default styles