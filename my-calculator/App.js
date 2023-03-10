import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";
import Calculator from "./Calculator";

export default function App() {
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Calculator />
        </SafeAreaView>
      </SafeAreaProvider>
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
