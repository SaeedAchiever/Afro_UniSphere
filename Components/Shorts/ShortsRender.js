import { View, Text } from 'react-native'
import React from 'react'

const ShortsRender = () => {

 const renderItem = ({ item, index }) => (
  <View>
    <View
      style={[styles.shortsVideoContainer, {
        height: height,
        width: width
      }]}
    >
      <VideoView
       player={videoPlayers[index]}
        ref={(ref) => (videoRefs.current[index] = ref)} // Store the reference to each video
        style={styles.shortsVideo}
        source={{ uri: item.source }}
        resizeMode='cover'
        allowsFullscreen={false}
        allowsPictureInPicture
        nativeControls={false}
      />
    </View>

    {/* Comments Section */}
    <View style={[styles.showCommentsContainer, {
      display: isCommentsVisible
    }]}>
      <Pressable onPress={() => {
        setIsCommentsVisible('none');
        setIsScrollable(true);
      }}>
        <View style={styles.MenuBtnContainer}>
          <Image 
            source={Close}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </Pressable>

      <Comments item={item} />
    </View>

    {/* Interactions Section */}
    <View style={styles.InteractionsMainContainer}>
      <Interactions item={item} showComments={showComments} />
    </View>

    {/* User Section */}
    <View style={styles.UserMainContainer}>
      <User item={item} />
    </View>
  </View>
)

  return (
    <View>
      <Text>ShortsRender</Text>
    </View>
  )
}

export default renderItem