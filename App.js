import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// firebase
var firebaseConfig = {
    apiKey: "AIzaSyCZ_fgDtPm-8FodrEKU1nSzaUMgQj1tK_E",
    authDomain: "hellowchat-e6c94.firebaseapp.com",
    databaseURL: "https://hellowchat-e6c94-default-rtdb.firebaseio.com",
    projectId: "hellowchat-e6c94",
    storageBucket: "hellowchat-e6c94.appspot.com",
    messagingSenderId: "636721051865",
    appId: "1:636721051865:web:f20a4000418f74b992e6c8",
    measurementId: "G-F799HZRF5F"
  };
//

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
