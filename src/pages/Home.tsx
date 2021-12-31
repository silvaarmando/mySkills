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

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [
    newSkill,
    setNewSkill
  ] = useState('')

  const [
    mySkills,
    setMySkills
  ] = useState<SkillData[]>([])

  const [
    greeting,
    setGreeting
  ] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

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

      <Button
        onPress={handleAddNewSkill}
        title="Add"
        activeOpacity={0.7}
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

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CardSkill
            skill={item.name}
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
