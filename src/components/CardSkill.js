import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

export function CardSkill() {
  <TouchableOpacity
    key={1}
    style={styles.buttonSkill}
  >
    <Text
      style={styles.textSkill}
    >
      skill
    </Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    marginVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
  },

  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});