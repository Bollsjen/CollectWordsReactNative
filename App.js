import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

import AppBar from './components/AppBar'
import AppContainer from './components/AppContainer'

export default function App() {
  const [word, setWord] = useState()
  const [wordList, setWordList] = useState([])
  const [displayList, setDisplayList] = useState([])

  const SaveWord = () => {
    Keyboard.dismiss()
    setWordList([...wordList, word])
    setWord(null)
  }

  const DisplayWordList = () => {
    wordList != null && wordList != [] ? setDisplayList(wordList.toString()) : setDisplayList([])
  }

  const ClearWords = () => {
    setWordList([])
    setDisplayList([])
  }

  return (
    <AppContainer appBar={<AppBar title={'Collect Words'}/>} >
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder={'Skriv et ord...'} value={word} onChangeText={text => setWord(text)}/>
          </View>
        </KeyboardAvoidingView>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={() => SaveWord()}>
              <Text style={styles.buttonText}>SAVE WORD</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={() => DisplayWordList()}>
              <Text style={styles.buttonText}>DISPLAY WORDS</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={() => ClearWords()}>
              <Text style={styles.buttonText}>CLEAR WORDS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>{displayList != null && displayList != [] ? displayList.toString() : ''}</Text>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {

  },
  textInputView: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: '#FFF'
  },
  textInput: {
    borderBottomColor: '#AFAFAF',
    borderBottomWidth: 1,
  },

  buttonContainer: {
    marginTop: 16
  },
  buttonView:{
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#00bfff',
    color: 'FFF',
    alignItems: 'center'
  },
  buttonText: {
    paddingVertical: 12,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
