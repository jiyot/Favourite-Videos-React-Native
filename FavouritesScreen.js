import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button , TouchableOpacity} from 'react-native';
import { db } from './config/Firestore-config';
import { collection, addDoc, updateDoc, deleteDocs,getDocs, docs,deleteDoc } from "firebase/firestore";
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { async } from "@firebase/util";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    onGetFav();
    console.log(favorites[0])
  }, []);

const onGetFav = async() => {
    try {
      const querySnapshot = await getDocs(collection(db, "favorites"));
      const documents = querySnapshot.docs;
      const favorites = documents.map(doc => ({ id: doc.id, ...doc.data() }));
      setFavorites(favorites);
    } catch(err) {
      console.error(`Error while getting all documents from collection : ${err}`);
      setEmployeeData(null);
    }
  }
  
  const onClearFav = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "favorites"));
      const documents = querySnapshot.docs;
      for (const doc of documents) {
        await deleteDoc(doc.ref);
      }
      setFavorites([]);
    } catch(err) {
      console.error(`Error while deleting all documents from collection : ${err}`);
    }
  }
  


  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { video: item, passID: item.id })}>
      <View style={styles.favoriteContainer}>
        <Text style={styles.favoriteTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <>
          <Button title="CLEAR FAVORITES" onPress={onClearFav} />
          <FlatList
            data={favorites}
            renderItem={renderFavoriteItem}
            keyExtractor={item => item.id}
            style={styles.list}
          />
        </>
      ) : (
        <Text style={styles.noFavoritesText}>No favorites found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    paddingHorizontal: 16,
  },
  favoriteContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  favoriteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default FavoritesScreen;




