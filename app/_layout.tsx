import { Stack } from 'expo-router';

export default function RootLayout () {
    return(
        <Stack screenOptions={{

            headerShown: true
        }}>
            <Stack.Screen name='index' options= {{title:'HOME', headerShown: false}}/>
            <Stack.Screen name='about' options= {{title:'Acessar sua conta', animation: 'ios'}}/>
        </Stack>
    );
}