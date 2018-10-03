import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import MyButton from '../MyButton'



export default class App extends React.Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#062E54',
        },
      };

  render() {
      const {navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <MyButton onPress={()=>navigate('Login')} Text={'Login'}></MyButton>
        <MyButton onPress={()=>navigate('Register')} Text={'Register'}></MyButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#062E54'
  }
});
