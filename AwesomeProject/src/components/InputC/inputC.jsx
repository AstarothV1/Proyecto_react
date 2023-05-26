import React, {useState} from "react";
import {Text, View, TextInput} from 'react-native';
import {styles} from './style';


const TextInputComponent = (props) => {
    const {password, setPassword} = useState('');
    const {mostrarPassword, setMostrarPassword} = useState(false);

    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input} 
            value={password}
            onChangeText={setPassword}
            />
        </View>
    );
};

export default TextInputComponent;