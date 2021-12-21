import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  Platform
} from 'react-native';

export function Home() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text
        style={styles.title}
      >
        Welcome Armando
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 7,
  }
})