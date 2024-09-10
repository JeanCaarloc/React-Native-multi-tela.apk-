import { Link, Stack } from "expo-router";
import { useState } from "react";
import { StatusBar, Text, StyleSheet, Pressable, TextInput, View, Image, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function About() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  

  
  const mostrar = () => {
    alert('Ops! Não reconheci seu usuário ou senha. Varifique se os dados digitados estão certos e tente novamente. (cod: 0221)')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{
                title: 'Acessar sua conta',
                headerTitleAlign: 'center',
                navigationBarColor:'#015EAC',
                headerStyle: {
                  backgroundColor: '#015EAC',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTintColor:"white"
            }}
            /> 


      <StatusBar />
      <View style={styles.containerInput}>
        <Image source={require('../assets/icon-usuario.png')} />
        <TextInput style={styles.inputUsuario} placeholder="Usuário" />
      </View>

      <View style={styles.containerInput}>
        <Image source={require('../assets/icon-cadeado.png')} />
        <TextInput style={styles.inputSenha} placeholder="Senha" />
        <Image source={require('../assets/icon-olho.png')} />
      </View>

      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={15}
          fillColor="#ec9b05"
          unFillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ec9b05" }}
          innerIconStyle={{ borderWidth: 2 }}
          isChecked={selectedOption === 'fisica'}
          onPress={() => setSelectedOption('fisica')}
        />
        <Text style={styles.checkboxText}>Pessoa Fisica</Text>

        <BouncyCheckbox
          size={15}
          fillColor="#ec9b05"
          unFillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ec9b05" }}
          innerIconStyle={{ borderWidth: 2 }}
          isChecked={selectedOption === 'juridica'}
          onPress={() => setSelectedOption('juridica')}
        />
        <Text style={styles.checkboxText}>Pessoa Jurídica</Text>
      </View>

      

       <View style={styles.biometria}>
       <Image style={styles.iconBiometria} source={require('../assets/iconBiometria.png')}/>
       <Text> Acessar com biometria</Text>
       <Switch
            trackColor={{false: '#767577', true: '##ac7000'}}
            thumbColor={isEnabled ? '#ec9b05' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />

       </View>

       <Text style={styles.h1}>Não sei meu usuário ou senha   ></Text>

      <Pressable style={styles.btnVoltar}>
        <Text style={styles.h2} onPress={mostrar}>Acessar sua conta</Text>
      </Pressable>

      <Link href="" asChild>
        <Pressable style={styles.btnAcessar}>
          <Text style={styles.h3}>Voltar</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: '#e2e0e0',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginBottom: 10,
  },
  inputUsuario: {
    width: '80%',
    height: 40,
    marginLeft: 10,
  },
  inputSenha: {
    width: '73%',
    height: 40,
    marginLeft: 12,
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent:"space-evenly",
    width: '100%',
    alignContent:"center",
    
  },
  checkboxText: {
    fontSize: 14,
    color: '#0f0f0f', // Certifique-se de que a cor do texto seja visível
    marginLeft:-50
  },
  biometria:{
    width:'83%',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",

  },
  iconBiometria:{
    width:30,
    height:30,
    
  },
  btnAcessar: {
    width: '90%',
    height: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ec9b05',
  },
  btnVoltar: {
    width: '90%',
    height: 35,
    backgroundColor: '#ec9b05',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 14,
    marginBottom: 10,
  },
  h1: {
    width:'90%',
    color:'#015EAC',
    fontWeight:"bold",
  },
  h2: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  h3: {
    color: '#ec9b05',
    fontWeight: "bold",
  },
  
});
