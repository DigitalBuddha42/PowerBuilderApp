import React from 'react';
import { View, Text } from 'react-native';

interface ResultsProps {
  navigation: any;
}

const Results: React.FC<ResultsProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Your workout is saved!</Text>
    </View>
  );
};

export default Results;
