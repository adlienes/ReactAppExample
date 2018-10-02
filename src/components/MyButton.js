import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

export default class MyButton extends React.Component{

    render(){

        return(
            <TouchableOpacity style={{flex:1}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{backgroundColor:'blue',width:200,height:30,alignItems:'center',justifyContent:'center'}}>                    
                     <Text style={{fontSize:20}}>{this.props.Text}</Text>
                </View>
                </View>
            </TouchableOpacity>

        );
    }
}