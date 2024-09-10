import { Link, router,Stack } from "expo-router";
import { StatusBar, Text, StyleSheet, Pressable, View, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const img='../assets/familia.png'

export default function Screen(){
    const click = () =>{
        router.navigate('/about')
    }


    return(
        <SafeAreaView style={styles.container}>
            
            <ImageBackground 
                source={require(img)}
                style={styles.imgFundo}
            >
                <StatusBar/>
                <Image
                    source={require('../assets/logoCaixa.png')}
                    resizeMode='cover'
                    style={styles.logoCaixa}
                />
                <View style={styles.central}>
                    <View style={styles.central1}> 
                        <Text style={styles.h1}>Que bom ter você aqui!</Text>
                        <Pressable style={styles.btn} onPress={click}>
                            <Text style={styles.h3}>Acessar sua conta</Text>
                        </Pressable>
                        <View style={styles.acesso}>
                            <Text style={styles.h3}>Cadastrar usuário</Text>
                            <Text style={styles.chevron}>></Text>
                        </View>
                    </View>
                    <View style={styles.acessoRodape}>
                        <Text style={styles.chevronTop}>˄</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',        
    },
    imgFundo:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    logoCaixa:{
        width: 40,
        height: 30,
        marginLeft:10,
        marginTop:10
    },
    
    central:{
        flex:1,
        
        justifyContent:"flex-end"
    },
    central1:{
        width:'100%',
        
        alignItems: "flex-start",
        paddingLeft:10,
        paddingRight:10,
        marginTop: 10
    },
    acesso:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        marginTop:20
    },
    chevron:{
        color:'white',
        fontWeight: "bold",
        fontSize:20
    },
    acessoRodape:{
        width:'100%',
        height:45,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#e6e3e3',
        marginTop:35
    },
    chevronTop:{
        color:'#015EAC',
        fontWeight: "bold",
        fontSize:30,
    },
    btn:{
        width: '100%',
        height: 42,
        backgroundColor: '#ec9b05',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop:14
    },
    h3:{
        color: 'white',
        fontSize: 16,
        fontWeight:"bold",
    
    },
    h1:{
        fontSize: 15,
        color: 'white',
        justifyContent:"center",
        alignItems:"center",
    },
    
})