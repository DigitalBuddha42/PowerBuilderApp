import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface WorkoutProps {
  route: any;
  navigation: any;
}

const Workout: React.FC<WorkoutProps> = ({ route, navigation }) => {
  const { maxLift } = route.params;
  const [workoutData, setWorkoutData] = useState({
    sets: '',
    reps: '',
    weight: maxLift,
  });

  const handleWorkoutSubmit = () => {
    // Submit workout data logic (maybe call the backend API here)
    navigation.navigate('Results');
  };

  return (
    <View>
      <TextInput
        value={workoutData.sets}
        onChangeText={(text) => setWorkoutData({ ...workoutData, sets: text })}
        placeholder="Sets"
        keyboardType="numeric"
      />
      <TextInput
        value={workoutData.reps}
        onChangeText={(text) => setWorkoutData({ ...workoutData, reps: text })}
        placeholder="Reps"
        keyboardType="numeric"
      />
      <TextInput
        value={String(workoutData.weight)}
        onChangeText={(text) => setWorkoutData({ ...workoutData, weight: Number(text) })}
        placeholder="Weight"
        keyboardType="numeric"
      />
      <Button title="Submit Workout" onPress={handleWorkoutSubmit} />
    </View>
  );
};

export default Workout;