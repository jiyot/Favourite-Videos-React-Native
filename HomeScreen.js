import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [passID, setpassID] = useState('');

  useEffect(() => {
    fetch('https://api.dailymotion.com/user/x1audmk/videos?limit=20')
      .then(response => response.json())
      .then(data => {
        const videoList = data.list.map(video => ({
          id: video.id,
          title: video.title,
          thumbnail: video.thumbnail_360_url,
          description: video.description,
          views: video.views_total,
        }));
        setVideos(videoList);
      })
      .catch(error => console.error(error));
  }, []);

  const fetchVideoDetails = async (videoId) => {
    try {
      const response = await fetch(
        `https://api.dailymotion.com/video/${videoId}?fields=thumbnail_240_url,description,views_total,title,created_time`
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  
  const navigateToDetailsScreen = video => {

    fetchVideoDetails(video.id)
    .then((details) => {
        console.log(details)
        console.log(video.id)
        console.log(`----------------------`);
        console.log(`-----------------------`);
      navigation.navigate('Details', { video: details, passID : video.id });
    })
    .catch((error) => console.log(error));
    // navigation.navigate('Details', { video });
  };

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity style={styles.videoContainer} onPress={() => navigateToDetailsScreen(item)}>
      <Text style={styles.videoTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const navigateToFavoritesScreen = () => {
    navigation.navigate('Favorites');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.favoritesButton} onPress={navigateToFavoritesScreen}>
        <Text style={styles.favoritesButtonText}>VIEW FAVORITES</Text>
      </TouchableOpacity>
      <FlatList
        data={videos}
        renderItem={renderVideoItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#0c077b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 10,
  },
  videoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoThumbnail: {
    width: 120,
    height: 90,
    marginRight: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoritesButton: {
    height: 50,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
   },
});

export default HomeScreen;
