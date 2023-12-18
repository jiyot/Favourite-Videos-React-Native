# Favourite Videos React Native

## Welcome
Welcome to the Favourite Videos React Native repository—a sleek and responsive React Native application developed as part of the Cross-Platform App Development course. Explore trending videos from Wired Magazine's channel on DailyMotion.com, delve into video details, and curate your own favourites list.

## Problem Statement
Check out the detailed problem statement in [Problem statement Videos app.pdf](https://github.com/jiyot/Favourite-Videos-React-Native/files/13699146/Problem.statement.Videos.app.pdf).

[![SellSpot Video Demo](https://github.com/jiyot/Favourite-Videos-React-Native/assets/126514800/9345cf7a-1ab8-4317-923d-b547ed1a0241)](https://drive.google.com/file/d/1jZ7SRenJFkCmnYsI4kwC2mAYmag7D0jZ/view?usp=sharing)

## Project Structure

### App.js
The main entry point, managing navigation and conditional rendering of screens based on user actions.

### Screens

- **HomeScreen.js**: Displays a list of videos from Wired Magazine's channel fetched from DailyMotion.com API.
  
- **VideoDetailsScreen.js**: Presents details about a selected video, allowing users to add it to their favourites list.

- **FavoritesScreen.js**: Displays a list of favourite videos with options to view details or clear the favourites list.

### Navigation

Stack Navigators from the react-navigation library facilitate smooth navigation between screens.

## Implemented Features

### Styling

Crafted for aesthetic appeal, the app's user interface uses React Native's CSS styling capabilities to create an intuitive and visually pleasing experience.

### React Native Components and Navigation

Responsive and efficient UI design is achieved through appropriate use of React Native components. Components are designed for reusability, contributing to a well-organized and modular architecture. Smooth navigation is ensured with Stack Navigators from the react-navigation library.

### API Integration

The app seamlessly integrates with API endpoints to retrieve trending videos from Wired Magazine's channel on DailyMotion.com. API requests are handled effectively, and the latest videos are displayed on the Home Screen.

### Data Persistence with Firebase Firestore

Firebase Firestore is seamlessly integrated to implement robust data persistence functionalities. Users can add, remove, and retrieve favorited videos, enhancing the overall user experience.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jiyot/Favourite-Videos-React-Native.git


2. **Navigate to the project directory:**
   ```bash
   cd yourfirstname-videos

3. **Install dependencies:**
   ```bash
   npm install

4. **Set up Firebase:**
    Follow the Firebase setup instructions mentioned in the task description to integrate Firebase Firestore for data persistence.
   ```bash
   https://firebase.google.com/docs/android/setup

6. **Run the app:**
   ```bash
   npm start

Feel free to reach out if you have any questions or encounter issues. Good luck!


