import React, {Component} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native'

export default class SignupLoginScreen extends Component{
   render(){
     return(
      <View style={styles.container}>

        <Text style={styles.HeadingTextStyle}>BARTER SYSTEM</Text>

       <TextInput
        style={styles.EmailTextInputStyle}
        placeholder = "Enter E-mail"
       />
       <TextInput
        style={styles.PasswordTextInputStyle}
        placeholder = "Enter Password"
       />

         <TouchableOpacity
            style = {styles.LogInButtonStyle}
            onPress={()=>{}}
          >
            <Text style={styles.ButtonTextStyle}>LOG-IN</Text>
         </TouchableOpacity>

         <TouchableOpacity
            style = {styles.SignUpButtonStyle}
            onPress={()=>{}}
          >
            <Text style={styles.ButtonTextStyle}>SIGN-UP</Text>
         </TouchableOpacity>
      </View>   
     )  
   } 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#138D75'  
   },
  EmailTextInputStyle:{
   borderWidth:4, 
   height:70,
   width:290, 
   backgroundColor:'#138D75',
   borderBottomColor:'#F5B041',
   borderColor:'#138D75',
   marginTop:50,
   marginLeft:550,
  },
  PasswordTextInputStyle:{
    borderWidth:4, 
    height:70,
    width:290, 
    backgroundColor:'#138D75',
    borderBottomColor:'#F5B041',
    borderColor:'#138D75',
    marginTop:40,
    marginLeft:550,
   },
  LogInButtonStyle:{
    borderWidth:4,
    height:30,
    width:200,
    alignItems:'center',
    borderRadius:5,
    justifyContent:'center',
    backgroundColor:'#138D75',
    borderColor:'#F5B041',
    marginTop:70,
    marginLeft:590,
    
  }, 
  SignUpButtonStyle:{
    borderWidth:4,
    height:30,
    width:200,
    alignItems:'center',
    borderRadius:5,
    justifyContent:'center',
    backgroundColor:'#138D75',
    borderColor:'#F5B041',
    marginTop:20,
    marginLeft:590,
    
  }, 
  ButtonTextStyle:{
   color:'#F5B041'  
  },
  
  HeadingTextStyle:{
    color:'#F5B041',
    fontSize:56,
    marginLeft:500,
    marginTop:60, 
   }, 

})