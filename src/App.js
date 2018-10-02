/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MyButton from './components/MyButton';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'',flex:1}}><MyButton  Text={'Giriş Yap'}></MyButton></View>
        <View style={{backgroundColor:'',flex:1}}><MyButton Text={'Kayıt Ol'}></MyButton></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
