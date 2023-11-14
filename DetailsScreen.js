import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { db } from './config/Firestore-config';
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";

const DetailsScreen = ({ route }) => {
  const { video, passID } = route.params;

  useEffect(() => {
    console.log(`Video id: ${passID}`);
    console.log(`Video: ${video.title}`);
  }, []);

  const addToFavorites = async (video) => {
    try {
      const { id, thumbnail_240_url, title, description, views_total } = video;
      const FavToInsert = {
        id: passID,
        thumbnail_240_url: video.thumbnail_240_url,
        title: video.title,
        description: video.description,
        views_total: video.views_total
      }
      const insertedDoc = await addDoc(collection(db, "favorites"), FavToInsert);
      console.log(`Video added to favorites! : ${insertedDoc.id}`);
    } catch (error) {
      console.error('Error adding video to favorites:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: video.thumbnail_240_url }} />
      <Text style={styles.title}>{video.title}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToFavorites(video)}>
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>

      <Text style={styles.views}>{video.views_total} views</Text>
      <ScrollView style={{ maxHeight: 102 }}>
        <Text style={styles.description}>{video.description}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    backgroundColor: '#FFFFFF',
    marginTop: 0,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    marginBottom: 10, // add some margin to separate it from the title
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center', // center align the title
    paddingHorizontal: 20, // add some padding to the sides
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20, // add some padding to the sides
  },
  views: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10, // add some margin below the button
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // center align the button text
  },
});

export default DetailsScreen;
