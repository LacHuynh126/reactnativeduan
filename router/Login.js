import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

const Login = (props) => {
  const {navigation} = props;
  const [email,setEmali] = useState('');
  const [password, setPassWord] = useState('');
  const onLogin = () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.21:3000/api/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email,password})
        });
        // const status = await rawResponse.json();
        const check = await rawResponse.text();
        const datacheck = JSON.parse(check);
        if(datacheck.status == true){
          alert("Dang nhap thanh cong")
        } else {
          alert("Dang nhap that bai")
        }
        // if(status == true){
        //     alert('dang nhap thanh cong')
        // } else {
        //     alert('dang nhap that bai');
        // }
        console.log(datacheck.status);
 
      })();
  }
  const onRegister = () => {
    navigation.navigate('SignUp')
  }
  return (
    <View>
        <TextInput
            onChangeText={email => setEmali(email)}
            placeholder='Email'
            
        />
    
        <TextInput
      
            onChangeText={password => setPassWord(password)}
            placeholder='Password'
        />
        <Button title='Login' onPress={onLogin}></Button>
        <Button title='Register' onPress={onRegister}></Button>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  }
});
