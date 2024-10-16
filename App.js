import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from  '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExercises from './screens/AllExercises';
import AddExercise from './screens/AddExercise';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllExercises" component={AllExercises} />
          <Stack.Screen name="AddExercise" component={AddExercise} />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}
