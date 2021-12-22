import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';

export function Home() {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title}
      >
        Welcome Armando
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text
          style={styles.buttonText}
        >
          Add
        </Text>
      </TouchableOpacity>

      <Text
        style={
          [
            styles.title,
            {
              marginTop: 50,
            }
          ]
        }
      >
        My Skills
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    fontSize: 18,
    padding: Platform.OS === 'android' ? 10 : 15,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  }
})
