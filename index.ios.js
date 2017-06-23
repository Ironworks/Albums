//Index.ios.js - place code in here for IOS!
//import a library to help create Component

//import is part of ES6 javascript standard. It imports code outside code

//React knows how a component should behave
//Knows how to take a bunch of components and make them work together
import React from 'react';

//Knows how to take the output from a component and place it on the screen
//provides default core components like images, text
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create Component, uses jsx
const App = () => (
    <Header headerText={'bums!'} />
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
