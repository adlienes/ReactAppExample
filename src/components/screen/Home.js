import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  render() {
      const {navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigate('Register')}>
                <View style={{backgroundColor:'#BBA0CA',width:250,height:30,alignItems:'center',justifyContent:'center',marginTop:10,borderRadius:16}}>                    
                     <Text style={{fontSize:25,fontFamily:'Cochin',fontWeight:'bold'}}>Login</Text>
                </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('Register')}>
                <View style={{backgroundColor:'#BBA0CA',width:250,height:30,alignItems:'center',justifyContent:'center',marginTop:10,borderRadius:16}}>                    
                     <Text style={{fontSize:25,fontFamily:'Cochin',fontWeight:'bold'}}>Register</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#BFE0F7'
  }
});
