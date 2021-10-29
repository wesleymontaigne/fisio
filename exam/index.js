import * as React from 'react';
import { Text, View ,TextInput ,TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import swal from 'sweetalert';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';


function exam(){
const [isChecked, setChecked] = React.useState(false);
const [isChecked2, setChecked2] = React.useState(false);
const [isChecked3, setChecked3] = React.useState(false);
const [ombroSimetrico,setOmbroSimetrico]=React.useState(false);
const [ombroDeprimido,setOmbroDeprimido]=React.useState(false);
const [ombroDeprimidoInput,setOmbroDeprimidoInput]=React.useState('');
const [Cabeca,setCabeca]=React.useState('');
const [inclinacaoLateral,setInclinacaoLateral]=React.useState('');
const [controleTronco,setControleTronco]=React.useState(false);
const [simetricasTronco,setSimemetricasTronco]=React.useState(false);
const [situacaoTronco,setSituacaoTronco]=React.useState('NÃO');
const [assimetricas,setAssimetricas]=React.useState(false);
const [costelasAlinhadas,setCostelasAlinhdas]=React.useState(false);
const [costelasElevadasInvertidas,setCostelasElevadasInvertidas]=React.useState(false);
const [observacaoCostelas,setObservacaoCostelas]=React.useState('');
const [trianguloTalles,setTrianguloTalles]=React.useState(false);
const [trianguloTallesState,setTrianguloTallesState]=React.useState('NÃO');
const [observacaoTrianguloTalles,setObservacaoTrianguloTalles]=React.useState('');

{/*Function to set vale to TROCO*/}
function wiiliam(){
 if(controleTronco===false){
  setSituacaoTronco('SIM');
  setControleTronco(true);
 }else{
   console.log('tem simetria')
  setSituacaoTronco('NÃO');
  setControleTronco(false);
 } 
}

{/*fUNCTION TRIANGULO DE TALLES*/}
function trianguloTallesFunction(){
  if(trianguloTalles===false){
    setTrianguloTallesState('SIM');
    setTrianguloTalles(true);
   }else{
     
    setTrianguloTallesState('NÃO');
    setTrianguloTalles(false);
   } 

}
return(
  <SafeAreaView>
<ScrollView>
<View style={{flex:1,alignItems:'center',backgroundColor:'dodgerblue',maxHeight:40000}}>
<Text style={{fontSize:20,fontStyle:'bold',color:'white'}}>Avaliação Postural</Text>
<Text style={{color:'white'}}>Postura Adotada na Avaliação</Text>   

<View style={{flexDirection:'row'}}>
{/* Primerio CheckBoxs*/}
<View style={{flexDirection:'row',alignItems:'center',flex:1}}>
<Checkbox
style={{margin:8}}
value={isChecked}
onValueChange={setChecked}
color={isChecked ? 'green' : undefined}
/>
<Text style={{color:'white'}}>Decubito</Text>   
</View>



<View style={{flexDirection:'row',alignItems:'center',flex:1}}>
<Checkbox
style={{margin:8}}
value={isChecked2}
onValueChange={setChecked2}
color={isChecked2 ? 'green' : undefined}
/>
<Text style={{color:'white'}}>Sentado</Text>   
</View>


<View style={{flexDirection:'row',alignItems:'center',flex:1}}>
<Checkbox
style={{margin:8}}
value={isChecked3}
onValueChange={setChecked3}
color={isChecked3 ? 'green' : undefined}
/>
<Text style={{color:'white'}}>Ortostatica</Text>   
</View>
</View>
{/* Segundo cabaçalho*/}
<View style={{borderColor:'white',borderBottomWidth:1,borderTopWidth:1,width:'100%',height:40,alignItems:'center',margin:10}}>
<Text style={{color:'white',fontSize:16,margin:8}}>Vista Anterior</Text>
</View>

   <Ionicons name="body" size={24} color="whSimetricosite" />
  <Text style={{color:'white',fontSize:20}}>CABEÇA:</Text>
  <Text style={{color:'white'}}>Inclinação lateral</Text>
  <TextInput   value={inclinacaoLateral}
   onChangeText={(inclinacaoLateral) => setInclinacaoLateral(inclinacaoLateral)}
   style={{
    marginLeft: 0,
    marginTop:5,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth:0,
    borderTopWidth: 0,
    borderColor:'white',
    outline: 'none',
    color:'white',
    placeholderTextColor:'white'}}
    placeholder=""
   keyboardType='default'/>
  



{/*OMBRO*/}
<Ionicons name="body" size={24} color="white" style={{marginTop:10}} />
<Text style={{color:'white',fontSize:20}}>OMBRO:</Text>
<Checkbox
style={{margin:8}}
value={ombroSimetrico}
onValueChange={setOmbroSimetrico}
color={ombroSimetrico ? 'green' : undefined}
/>

<Text style={{color:'white'}}>Simetricos</Text>   

<Checkbox
style={{margin:8}}
value={ombroDeprimido}
onValueChange={setOmbroDeprimido}
color={ombroDeprimido ? 'green' : undefined}
/>

<Text style={{color:'white'}}>Deprimidos Lado:</Text>   

   <TextInput
   value={ombroDeprimidoInput}
   onChangeText={(ombroDeprimidoInput) => setOmbroDeprimidoInput(ombroDeprimidoInput)}
   style={{
    marginLeft: 0,
    marginTop:5,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth:0,
    borderTopWidth: 0,
    borderColor:'white',
    outline: 'none',
    color:'white',
    placeholderTextColor:'white'}}
    placeholder="Lado Esquerdo"
    keyboardType='default'/>

    {/*tronco*/}

    <Ionicons name="body" size={24} color="white" style={{marginTop:10}} />

<Text style={{color:'white',marginTop:10}}>TRONCO:</Text>
<Checkbox
style={{margin:8}}
value={controleTronco}
onValueChange={wiiliam}
color={controleTronco ? 'green' : undefined}
/>

<Text style={{color:'white'}}>Controle de troco {situacaoTronco}</Text> 



{/*Clavicula*/}
<Ionicons name="body" size={24} color="white" style={{marginTop:10}} />
<Text style={{fontSize:20,color:'white'}}>Clavículas</Text>

<Checkbox
style={{margin:8}}
value={simetricasTronco}
onValueChange={setSimemetricasTronco}
color={simetricasTronco ? 'green' : undefined}
/>
<Text style={{color:'white'}}>Simétricas:</Text>   


<Checkbox
style={{margin:8}}
value={assimetricas}
onValueChange={setAssimetricas}
color={assimetricas ? 'green' : undefined}
/>
<Text style={{color:'white'}}>Asimétricas:</Text>   
   <TextInput
   value={Cabeca}
   onChangeText={(Cabeca) => setCabeca(Cabeca)}
   style={{
     marginBottom:100,
    marginLeft: 0,
    marginTop:5,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth:0,
    borderTopWidth: 0,
    borderColor:'white',
    outline: 'none',
    color:'white',
    placeholderTextColor:'white'}}
    placeholder="Descrição"
    keyboardType='default'
  />




{/*Clavicula*/}
<Ionicons name="body" size={24} color="white" style={{marginTop:10}} />
<Text style={{fontSize:20,color:'white'}}>Costelas</Text>

<Checkbox
style={{margin:8}}
value={costelasAlinhadas}
onValueChange={setCostelasAlinhdas}
color={costelasAlinhadas ? 'green' : undefined}
/>
<Text style={{color:'white'}}>Alinahadas:</Text>   


<Checkbox
style={{margin:8}}
value={costelasElevadasInvertidas}
onValueChange={setCostelasElevadasInvertidas}
color={costelasElevadasInvertidas ? 'green' : undefined}
/>
<Text style={{color:'white'}}>Elevadas e invertidas:</Text>   
   <TextInput
   value={observacaoCostelas}
   onChangeText={(observacaoCostelas) => setObservacaoCostelas(observacaoCostelas)}
   style={{
     marginBottom:100,
    marginLeft: 0,
    marginTop:5,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth:0,
    borderTopWidth: 0,
    borderColor:'white',
    outline: 'none',
    color:'white',
    placeholderTextColor:'white'}}
    placeholder="Descrição"
    keyboardType='default'
  />
     


{/*Clavicula*/}
<Ionicons name="body" size={24} color="white" style={{marginTop:10}} />
<Text style={{fontSize:20,color:'white'}}>Trinagulo de talles</Text>

<Checkbox
style={{margin:8}}
value={trianguloTalles}
onValueChange={trianguloTallesFunction}
color={trianguloTalles ? 'green' : undefined}
/>
<Text style={{color:'white'}}>Aumentado: {trianguloTallesState}</Text>   

   <TextInput
   value={observacaoTrianguloTalles}
   onChangeText={(observacaoTrianguloTalles) => setObservacaoTrianguloTalles(observacaoTrianguloTalles)}
   style={{
     marginBottom:100,
    marginLeft: 0,
    marginTop:5,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth:0,
    borderTopWidth: 0,
    borderColor:'white',
    outline: 'none',
    color:'white',
    placeholderTextColor:'white'}}
    placeholder="Descrição"
    keyboardType='default'
  />






<View>

</View>

</View>
</ScrollView>
</SafeAreaView>

);
}
export default exam;