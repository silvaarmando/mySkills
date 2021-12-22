import
  React,
  {
    useState,
  }
from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';
import { Button } from '../components/Button';
import { CardSkill } from '../components/CardSkill';

export function Home() {
  const [
    newSkill,
    setNewSkill
  ] = useState('')
  const [
    mySkills,
    setMySkills
  ] = useState([])

  function handleAddNewSkill() {
    setMySkills([
        mySkills,
        newSkill
      ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Armando</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button
      />

      <Text
        style={[
          styles.title,
          {
            marginVertical: 50,
          },
        ]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
            <CardSkill />
          )
        )
      }
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
})
