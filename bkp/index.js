import * as React from 'react';
import { Text, View ,StyleSheet, TextInput ,TouchableOpacity ,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function HomeScreen() {
  const [nome, setText] = React.useState('');
  const [senha,setSenha] = React.useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'dodgerblue' }}>
      <Text style={{color:'white'}}>Login</Text>
      <TextInput
       value={nome}
       onChangeText={(nome) => setText(nome)}
       style={{height: 40,
        margin: 12,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth:0,
        borderTopWidth: 0,
        borderColor:'white',
        outline: 'none',
        color:'white',
        placeholderTextColor:'white'}}
        placeholder="Telefone"
        keyboardType='numeric'
       
      />

      <TextInput
      value={senha}
      onChangeText={(senha) => setSenha(senha)}
        style={{height: 40,
          margin: 12,
          borderWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 0,
          borderRightWidth:0,
          borderTopWidth: 0,
          borderColor:'white',
          outline: 'none',
          color:'white',
          placeholderTextColor:'white'}}
          placeholder="Senha"
          secureTextEntry={true}
      />



<TouchableOpacity onPress = {() => {/* do this */

if(!nome||!senha){

  alert("não pode ter campos vazios");
}if(nome && senha){


 

  var validatinoApi ='https://wesleymontaigne.com/controller/api/api.php';
  var headers={
   'Accept':'application/json',
   'Content-Type':'application.json',
   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
   'Access-Control-Allow-Origin':'*',
   'crossDomain': 'true',
   'Host': 'https://wesleymontaigne.com/controller/api/api.php',
   'Origin': '*',
   'Access-Control-Allow-Headers': '*',   
    };
   /*'crossDomain': 'true',*/
   var Data={
    nome:nome,
    senha:senha

   };

   fetch(validatinoApi,
    {
     method:'POST',
     headers:headers,
     body:JSON.stringify(Data)
   }).then((response)=>response.json())
     .then((response)=>{
       if(response.statusCode==200){
      alert(response.statusCode)

       }else{

          alert('Algo errado com usuario ou senha');

       }
     

     })
     .catch((error)=>{
       alert(error);
     });

}








}}>
<View style = {{backgroundColor: 'white', alignItems: 'center',
justifyContent: 'center' ,borderRadius: 10,width:110 }}
>
<Text style = {{ color: 'dodgerblue', padding:10}}>Entrar</Text>
</View>
</TouchableOpacity>
</View>
);
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'dodgerblue' }}>
      <Text style={{color:'white'}}>Login Síndico</Text>
      <TextInput
       style={{height: 40,
        margin: 12,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth:0,
        borderTopWidth: 0,
        borderColor:'white',
        outline: 'none',
        color:'white',
        placeholderTextColor:'white'}}
        onClick={()=>{
         
         
        }}
        placeholder="Telefone"
        keyboardType='numeric'
       
      />

      <TextInput
        style={{height: 40,
          margin: 12,
          borderWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 0,
          borderRightWidth:0,
          borderTopWidth: 0,
          borderColor:'white',
          outline: 'none',
          color:'white',
          placeholderTextColor:'white'}}
        onClick={()=>{
         
         
        }}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress = {() => {/* do this */}}>
    <View style = {{backgroundColor: 'white', alignItems: 'center',
                    justifyContent: 'center' ,borderRadius: 10,width:110 }}
           >
        <Text style = {{ color: 'dodgerblue', padding:10}}>Entrar</Text>
    </View>
</TouchableOpacity>

    </View>
  );
}




function logado() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'dodgerblue' }}>
     <Text style={{color:'white'}}>Logado</Text>
     

      <TouchableOpacity onPress = {() => {/* do this */}}>
    <View style = {{backgroundColor: 'white', alignItems: 'center',
                    justifyContent: 'center' ,borderRadius: 10,width:110 }}
           >
        <Text style = {{ color: 'dodgerblue', padding:10}}>Logado</Text>
    </View>
</TouchableOpacity>

    </View>
  );
}







const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator >
        <Tab.Screen name="Fisio" component={HomeScreen}  options={{
            headerRight:({navigation})=>(
           <TouchableOpacity> 
               <View style={{flexDirection:'row',margin:10}}>
              <View style={{flexDirection:'column',alignItems:'center',flex:1}}>
              <MaterialCommunityIcons name="doctor" size={40} color="dodgerblue" />
              <Text>Cadastro</Text>
              </View>
               
              </View>
           </TouchableOpacity>
             
           ),
          }} />
        <Tab.Screen name="Admin" component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
         
   
  },


 
});
