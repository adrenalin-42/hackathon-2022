import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './src/components/Camera';

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Add Photo"
      onPress={() =>
        navigation.navigate('CameraScreen')
      }
    />
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />                                                                                
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;