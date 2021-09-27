import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Input = props => {
    return (
        <View style={styles.container}>
            <Text>{props.label}</Text>
            <TextInput style={styles.input}
                {...props}
                onChangeText={props.onChangeText}
                value={props.value}
                autoCapitalize='sentences'
                autoCorrect
                ref={props.reference}
            />
            {!props.isValid && <Text>{props.error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    input: {
        marginVertical: 5,
        width: '100%',
        borderWidth: 1,
        padding: 10,
    },
})

export default Input;