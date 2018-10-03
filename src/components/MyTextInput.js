import React from 'react';
import {View,TextInput} from 'react-native';


export default class MyTextInput extends React.Component{

    render(){

        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <TextInput
                secureTextEntry={this.props.secureTextEntry}
                placeholder={this.props.placeholder} 
                placeholderTextColor={'white'}
                style={{backgroundColor:'#E51A93',width:325,height:30,margin:5,borderRadius:16,borderColor: 'white', borderWidth: 2,paddingLeft:8,color:'white',fontSize:15}}>
                </TextInput>
            </View>
        );
    }
}