import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button,Image,ImageBackground } from 'react-native';

const SignUp = (props) => {
  const {navigation} = props;
  const [email,setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassWord] = useState('');
  const onLogin = () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.21:3000/api/register', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email,username,password})
        });
        const content = await rawResponse.json();
        if(content == "Success"){
            alert('dang nhap thanh cong')
        } else {
            alert('dang nhap that bai');
        }
        console.log(content);
 
      })();
  }
  const onRegister = () => {
    navigation.navigate('SignUp')
  }
  return (
    <ImageBackground
        source={{uri:'https://i.pinimg.com/564x/47/f8/f5/47f8f5f1a191787d63178423d8a069e9.jpg'}} 
        style={styles.backgroundColor}>
        <View style={styles.backcenter}>
          <Image 
            source={require('../public/shop.png')}
            style={{width: 350, height: 150, marginBottom:-50}}
            resizeMode="cover"
            />
          <View style={styles.bottompage}>
            <TextInput
                onChangeText={email => setEmail(email)}
                placeholder='Email'
                style = {styles.inputext}
            />
            <TextInput
                onChangeText={username => setUsername(username)}
                placeholder='Username'
                style = {styles.inputext}
            />
            <TextInput
                onChangeText={password => setPassWord(password)}
                placeholder='password'
                style = {styles.inputext}
            />
            <Button title='Sign Up' 
                onPress={onLogin}
                color="green"
                >
            </Button>
          </View>
        </View>
    </ImageBackground>
  );
}
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundColor : {
    width:400,
    height:900,
    
  },
  backcenter : {
    marginHorizontal: 25,
    marginTop:25
  },
  inputext: {
    height: 45,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 20,
    marginVertical:7
  },
  tinyLogo: {
    width :184,
    height: 104,
    marginTop:100
  },
  bottompage: {
    marginTop:130
  }
});
