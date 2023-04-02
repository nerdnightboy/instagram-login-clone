import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:"grey", paddingTop:20,}}>English (India) V</Text>
      <View style={styles.loginform}>
        <Image style={styles.iglogo} source={require('./images/Instagram_logo.svg.png')}/>
        {/* form */}
        <TextInput placeholder='Phone number, email or username' placeholderTextColor={'grey'} style={styles.iginput}/>
        <TextInput placeholder='Password' placeholderTextColor={'grey'} style={styles.iginput} secureTextEntry={true}/>
        <TouchableOpacity>
          <Text style={styles.mybtn}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.primarytext}>Forgot your login details?<Text style={styles.secondarytext}>Get help logging in.</Text></Text>

        <View style={{width:350, flex:0, flexDirection:'row',alignItems:'center', justifyContent:'center'}}>

          <View style={{borderBottomColor:"grey", borderBottomWidth:1, height:1, width:'40%',}}></View>
          <Text style={{color:'grey', fontWeight:'600',fontSize:15,padding:5,}}>OR</Text>
          <View style={{borderBottomColor:"grey", borderBottomWidth:1, height:1, width:'40%'}}></View>

        </View>
        <View style={{flex:0,flexDirection:'row',marginVertical:10}}>
          <Image source={require('./images/Circle-Facebook-Logo-PNG-Pic.png')} style={{width:20,height:20, marginHorizontal:5}}/>
          <Text style={{color:'31B5FF',fontWeight:'700'}}>Log in with Facebook</Text>
        </View>
      </View>
      <View style={{flex:0, flexDirection:'column', alignItems:'center'}}>
        <View style={{borderBottomColor:"grey", borderBottomWidth:1, height:1, width:500}}></View>
          <Text style={styles.primarytext}>Don't have an account?<Text style={styles.secondarytext}>Sign Up.</Text></Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  loginform:{
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
  },
  iglogo:{
    width:300,
    height:60,
    resizeMode:'contain',
  },
  primarytext:{
    color:'grey',
    fontSize:12,
    paddingTop:20,
    paddingBottom:10,
  },
  secondarytext:{
    fontWeight:'700',
    color:'black',
  },
  iginput:{
    backgroundColor:'#272424',
    fontSize:15,
    padding:10,
    margin:10,
    borderRadius:5,
    color:'white',
    width:350,
  },
  mybtn:{
    color:'white',
    fontSize:17,
    backgroundColor:'#31B5FF',
    width:350,
    padding:10,
    textAlign:'center',
    fontWeight:'600',
    borderRadius:5,

  }
});
