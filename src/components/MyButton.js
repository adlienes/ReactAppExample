import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

export default class MyButton extends React.Component{

    render(){

        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{backgroundColor:'#BBA0CA',width:250,height:30,alignItems:'center',justifyContent:'center',marginTop:10,borderRadius:16}}>                    
                     <Text style={{fontSize:25,fontFamily:'Cochin',fontWeight:'bold'}}>{this.props.Text}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}