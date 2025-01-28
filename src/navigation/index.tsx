import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import WorkoutSelectionScreen from '../screens/WorkoutSelectionScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="WorkoutSelection" component={WorkoutSelectionScreen}>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;