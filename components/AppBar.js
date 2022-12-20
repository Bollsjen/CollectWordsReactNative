import React, {useEffect, useState} from 'react'
import { Keyboard, KeyboardAvoidingView, TextInput, StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView } from 'react-native';

const AppBar = (props) => {
        return (
        <View style={styles.titleView}>
            <Text style={styles.appBarTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleView: {
        paddingTop: 42,
        backgroundColor: '#FFF',
        borderBottomColor: '#AFAFAF',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
    appBarTitle: {
        fontSize: 24
    }
})

export default AppBar