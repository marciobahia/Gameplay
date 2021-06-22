import React, {useState} from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from './style';

export function SigIn() {
    const [text, setText] = useState('');

  return (
    <View style={styles.container}>

        <TextInput
         style={styles.input}
         onChangeText={setText} 
         
         />


      <Text>
          Você Digitou: {text}
      </Text>
    </View>
  )
}


