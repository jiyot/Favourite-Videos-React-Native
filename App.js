import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import FavouritesScreen from './FavouritesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Wired Magazine' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Video Details' }} />
        <Stack.Screen name="Favorites" component={FavouritesScreen} options={{ title: 'Favourite Videos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
