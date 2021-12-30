import
  React,
  {
    useState,
    useEffect,
  }
from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native';
import {
  Button
} from '../components/Button';
import {
  CardSkill
} from '../components/CardSkill';

export function Home() {
  const [
    newSkill,
    setNewSkill
  ] = useState('')

  const [
    mySkills,
    setMySkills
  ] = useState([])

  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    setMySkills(oldState => [
        ...oldState,
        newSkill
      ])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Armando</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text
        style={[
          styles.title,
          {
            marginVertical: 50,
          },
        ]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <CardSkillgit remote add origin https://github.com/franciscoarmando63/login-student.git
git branch -M main
git push -u origin main 
            skill={item}
          />
        )}
      />
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
