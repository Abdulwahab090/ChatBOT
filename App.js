// import { View, Text, SectionList, RefreshControl } from 'react-native'
// import React from 'react'
// // import { useEffect } from 'react';

// // import SplashScreen from 'react-native-splash-screen';

// import Figma1 from './src/Files/Figma1'
// import Figma2 from './src/Files/Figma2';
// import Figma3 from './src/Files/Figma3';
// import Figma4 from './src/Files/Figma4';
// import Figma5 from './src/Files/Figma5';
// import Figma6 from './src/Files/Figma6';
// import Figma7 from './src/Files/Figma7';
// import Figma8 from './src/Files/Figma8';
// import Figma9 from './src/Files/Figma9';
// import Figma10 from './src/Files/Figma10';
// import Figma11 from './src/Files/Figma11';
// import Figma12 from './src/Files/Figma12';
// import Figma13 from './src/Files/Figma13';
// import CountryPicker1 from './src/Files/CountryPicker1';
// import Textinput1 from './src/Files/Textinput1';

// const App = () => {
//   return (
//   // useEffect(()=>{
//   //   SplashScreen.hide();
//   //     },[]),
//     //   <Figma1/>
//       // <Figma2/>
//     //   <Figma3/>
//     //   <Figma4/>
//       // <Figma5/>
//     // <Figma6/>
//     // <Figma7/>
//     // <Figma8/>
//     // <Figma9/>
//     // <Figma10/>
//     // <Figma11/>
//     // <Figma12/>
//     // <Figma13/>
//     // <CountryPicker1/>
//     <Textinput1/>
    

//   )
// }

//  export default App;





import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tripnavigation from './src/Files/Tripnavigation';
import Textinput1 from './src/Files/Textinput1';
import ImagePicker1 from './src/Files/Imagepicker1';
import Linking1 from './src/Files/Linking1';
import Splashscreen1 from './src/Files/Splashscreen1';

function App() {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator    screenOptions={{headerShown:false}} >

        <Stack.Screen name=" Splashscreen" component={Splashscreen1}/>
        <Stack.Screen name="Textinput1" component={Textinput1}  />
        <Stack.Screen name="ImagePicker1" component={ImagePicker1}  />
        <Stack.Screen name="Linking1" component={Linking1}  />
       


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';

// const LoginPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [postalCode, setPostalCode] = useState('');

//   const handleLogin = () => {
//     // Validation or Login Logic
//     if (!name || !email || !password || !postalCode) {
//       Alert.alert('Error', 'Please fill out all fields');
//     } else {
//       Alert.alert('Success', `Welcome ${name}!`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login Page</Text>

//       {/* Name Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={setName}
//       />

//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />

//       {/* Password Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={true} // Secure option for password
//       />

//       {/* Postal Code Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your postal code"
//         value={postalCode}
//         onChangeText={setPostalCode}
//         keyboardType="numeric"
//       />

//       {/* Login Button */}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginVertical: 10,
//     backgroundColor: '#fff',
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#007bff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default LoginPage;

//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})






// import React from 'react';
// import {View, StyleSheet, TextInput,Text,Image,} from 'react-native';

// const Textinput1 = () => {
//   const [text, onChangeText] = React.useState('');
//   const [number, onChangeNumber] = React.useState('');
//   const [email, onChangeEmail] = React.useState('');
//   const [password, onChangePassword] = React.useState('');

//   return (
// <View style={{backgroundColor:'#808080',flex:1}}>
//       <View style={{backgroundColor:'white',height:780,width:300,left:30,}}>
//           <Text style={{color:'black',fontSize:30,left:100,top:80,fontWeight:'bold'
//         }}>Sign up</Text> 
//         <Image style={{height:30,width:20,left:20,top:50}} source={require('../FirstProject/src/Assets/juttsb1.png')}></Image>
   
        
// </View>

//     <View>
//     <Text style={{fontSize:20,color:'black',left:40,bottom:610,}}>Name:</Text> 
//       <TextInput

//         style={{borderWidth:1,
//             height:50,
//             padding:10,
//             bottom:650,
//             margin:40,
//             width:270,
//             borderRadius:10,
//             color:'black',
            
           
//         }}
        
//         onChangeText={onChangeText}
//         value={text}
//         keyboardType='default'
//         placeholder='Name'
//         placeholderTextColor='black'
        
       
//       />
//       <Text style={{fontSize:20,color:'black',left:40,bottom:675}}>Gmail:</Text> 
//        <TextInput
//         style={{borderWidth:1,
//             height:50,
//             padding:10,
//             margin:40,borderRadius:10,
//             bottom:715,
//             width:270,
//             color:'black',
            

//         }}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="juttiam56@gmail.com"
//         keyboardType="ascii-capable" 
//         placeholderTextColor='black'
        
//       />
//       <Text style={{fontSize:20,color:'black',left:40,bottom:735}}>password:</Text> 
//       <TextInput
//       style={{borderWidth:1,
//         height:50,
//         padding:10,
//         bottom:775,margin:40,borderRadius:10,color:'black',
//     }}
//       onChangeText={onChangeEmail}
//       value={email}
//       placeholder="6-20 words"
//       placeholderTextColor='black'
//       keyboardType='numeric'
//       secureTextEntry={true}
//        >

//       </TextInput>

//       </View>

//       <Text style={{fontSize:20,color:'black',left:40,bottom:800}}>Repeat password:</Text> 
//       <TextInput style={{borderWidth:1,
//             height:50,
//             padding:10,
//             bottom:840,margin:40,borderRadius:10,color:'black',
            
            
//         }}
//         onChangeText={onChangePassword}
//       value={password}
//       placeholder='6-20 words'
//       keyboardType='numeric'
//       placeholderTextColor='black'
//       secureTextEntry={true}
//       ></TextInput> 

// <View style={{backgroundColor:'#808080',height:50,width:280,bottom:700,left:40,borderRadius:10}}>
//          <Text style={{color:'white',fontSize:20,textAlign:'center',top:10}}>Next</Text> 
//       </View> 

//       </View>
//   );
// };



// export default Textinput1;















// import React, {useCallback} from 'react';
// import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

// const supportedURL = 'https://google.com';



// const OpenURLButton = ({url, children}) => {
//   const handlePress = useCallback(async () => {
//     // Checking if the link is supported for links with custom URL scheme.
//     const supported = await Linking.openURL(url);

//     if (supported) {
//       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
//       // by some browser in the mobile
//       await Linking.openURL(url);
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
//   }, [url]);

//   return <Button title={children} onPress={handlePress} />;
// };

// const Linking1 = () => {
//   return (
//     <View style={styles.container}>
//       <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Linking1;