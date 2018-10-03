import React from 'react';
import {View,Text,TextInput,NavigatorIOS,Image} from 'react-native';
import MyTextInput from '../MyTextInput/';
import MyButton from '../MyButton/';


export default class Login extends React.Component{

    static navigationOption={
        title:'Login Page',
    };

    render(){

        return(
            <View style={{backgroundColor:'#062E54',flex:1}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{width: 175, height: 175,backgroundColor:'white',borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                        style={{width: 150, height: 150}}
                        source={require('../img/usericon.png')}></Image>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <MyTextInput placeholder={'Please Enter E-Mail'}></MyTextInput>
                    <MyTextInput placeholder={'Please Enter Password'}></MyTextInput>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <MyButton Text={'Login'}></MyButton>
                    </View>
                    
                </View>
            </View>

        );
    }

}