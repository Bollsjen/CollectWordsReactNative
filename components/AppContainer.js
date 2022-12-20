import React, {useEffect, useState} from 'react'
import { Keyboard, KeyboardAvoidingView, TextInput, StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView } from 'react-native';

const AppContainer = (props) => {
    return (
        <View style={styles.appContainer}>
            {props.appBar}
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#AFAFAF',
        height: '100%'
    }
})

export default AppContainer