# Favourite-Videos-React-Native
Favourite Videos React Native

This repository contains the code for a React Native application developed as part of the Cross-Platform App Development App. The app allows users to view trending videos from Wired Magazine's channel on DailyMotion.com, explore video details, and add videos to their favourites list.

Project Structure

The project is organized with a focus on modular code design and organization:


App.js: The main entry point for the application, managing navigation and conditional rendering of screens based on user actions.


Screens:


HomeScreen.js: Displays a list of videos from Wired Magazine's channel fetched from DailyMotion.com API.



VideoDetailsScreen.js: Displays details about a selected video, including the video thumbnail, title, description, and total number of views. Allows the user to add the video to their favourites list.


FavoritesScreen.js: Displays a list of favourite videos and provides options to view details or clear the favourites list.


Navigation:


Stack Navigators from the react-navigation library are used for smooth navigation between screens.
Implemented Features

Styling

The app's user interface has been crafted to be reasonably aesthetically pleasing, utilizing React Native's CSS styling capabilities. The styling choices aim to create an intuitive and visually appealing user experience.


React Native Components and Navigation


The implementation makes appropriate use of React Native components to ensure a responsive and efficient user interface. Components have been designed with reusability in mind, contributing to a well-organized and modular architecture.


The navigation within the app has been seamlessly implemented using Stack Navigators from the react-navigation library. This choice ensures smooth transitions between screens and provides an intuitive user flow.


API Integration

The app successfully integrates with the specified API endpoints to retrieve trending videos from Wired Magazine's channel on DailyMotion.com. The API requests are appropriately handled, and the retrieved data is displayed on the Home Screen, providing users with access to the latest videos.


Data Persistence with Firebase Firestore

Firebase Firestore has been seamlessly integrated into the app to implement robust data persistence functionalities. Users can add, remove, and retrieve favorited videos, enhancing the overall user experience. The Firestore database is utilized to store and manage favorited videos efficiently.


Getting Started
Clone the repository:
git clone https://github.com/your-username/yourfirstname-videos.git

Navigate to the project directory:
cd yourfirstname-videos


Install dependencies:
npm install

Set up Firebase:
Follow the Firebase setup instructions mentioned in the task description to integrate Firebase Firestore for data persistence.

Run the app:
npm start

Feel free to reach out if you have any questions or encounter issues. Good luck!


