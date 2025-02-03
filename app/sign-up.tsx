// import React, { useState } from 'react';
// import { View, TextInput, Button, Text } from 'react-native';
// import firebase from '../../../utils/firebase.ts'; // Import firebase configuration
//
// const SignUp = ({ navigation }: any) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//
//   const handleSignUp = () => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // User is signed up
//         const user = userCredential.user;
//         console.log(user);
//         navigation.navigate('Home'); // Navigate after successful sign-up
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.error(errorMessage);
//       });
//   };
//
//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         secureTextEntry
//         onChangeText={(text) => setPassword(text)}
//       />
//       <Button title="Sign Up" onPress={handleSignUp} />
//       <Text onPress={() => navigation.navigate('SignIn')}>Already have an account? Sign In</Text>
//     </View>
//   );
// };
//
// export default SignUp;
import SignUpComp from '../components/SignUpComp'
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();

  return (
    <SignUpComp />
  );
}
