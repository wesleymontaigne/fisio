import * as React from 'react';
import { Text, View ,TextInput ,TouchableOpacity ,Button} from 'react-native';
import swal from 'sweetalert';
import { Fontisto } from '@expo/vector-icons';



function Cadastro({ navigation }){

    const [nome, setText] = React.useState('');
    const [telefone,setTelefone] =React.useState('');
    const [crf,setCRF] =React.useState('')
    const [senha,setSenha] = React.useState('');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'dodgerblue' }}>
      <View style={{alignItems:'center'}}
      ><TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Fontisto name="doctor" size={60} color="white" />
      <Text style={{color:'white'}}>Cadastro</Text>
      </TouchableOpacity>
      </View>
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
        placeholder="Nome"
        keyboardType='default'
       
      />

<TextInput
       value={telefone}
       onChangeText={(telefone) => setTelefone(telefone)}
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
        placeholder="Telefone com DDD"
        keyboardType='default'
        />

<TextInput
       value={crf}
       onChangeText={(crf) => setCRF(crf)}
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
        placeholder=" Certificado de Registro"
        keyboardType='default'
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
  
    swal("Error!", "Preencha todos os campos", "error");
  }if(nome && senha&&telefone.length==11){

  
  var validatinoApi ='https://wesleymontaigne.com/controller/api/api.php';
  var headers={
   'Accept':'application/json',
   'Content-Type':'application.json',
   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
   'Access-Control-Allow-Origin':'*',
   'crossDomain': 'true',
   'Host': 'https://wesleymontaigne.com/controller/api/api.php',
   'Origin': 'https://wesleymontaigne.com',
   
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
  
        swal("Error!", "Cadastro não realizado", "error");
  
       }
     
  
     })
     .catch((error)=>{
       alert(error);
     });
  
  }else{
    swal("Error!", "Algo errado, lembre-se que seu telefone deve conter o DDD apenas números", "error");   
  }
  
  
  
  
  
  
  
  
  }}>
  <View style = {{backgroundColor: 'white', alignItems: 'center',
  justifyContent: 'center' ,borderRadius: 10,width:110 }}
  >
  <Text style = {{ color: 'dodgerblue', padding:10}}>Cadastrar</Text>
  </View>
  </TouchableOpacity>
  </View>
  );


}
export default Cadastro;