import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [maxLift, setMaxLift] = useState<number | string>('');

  const handleSubmit = () => {
    if (typeof maxLift === 'number') {
      navigation.navigate('Workout', { maxLift });
    }
  };

  return (
    <View>
      <TextInput
        value={String(maxLift)}
        onChangeText={(text) => setMaxLift(Number(text))}
        placeholder="Enter your 1RM lift"
        keyboardType="numeric"
      />
      <Button title="Nex" onPress={handleSubmit} />
    </View>
  );
};

export default Home;