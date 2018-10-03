import React from 'react';
import {View,Text,TextInput,NavigatorIOS} from 'react-native';


export default class Login extends React.Component{

    static navigationOption={
        title:'Login Page',
    };

    render(){

        return(

            <View><Text>This Page login</Text></View>

        );
    }

}