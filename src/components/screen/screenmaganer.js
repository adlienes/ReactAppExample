
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const Screens=StackNavigator({
    Home:{screen:Home},
    Login:{screen:Login},
    Register:{screen:Register}
});

export default Screens;
