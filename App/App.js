//React
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Icons
import { Ionicons } from '@expo/vector-icons';

//Components
import HomeScreen from './src/Screens/HomeScreen';
import AddressSearch from './src/Screens/AddressSearch';
import WhenSelect from './src/Screens/WhenSelect';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="AddressSearch"
          component={AddressSearch}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="WhenSelect"
          component={WhenSelect}
          options={({ navigation, route }) => ({
            headerTitle: 'When',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                title="Back"
                color="#000"
              >
                <Ionicons name="chevron-back-sharp" size={30} color="black" />
              </TouchableOpacity>
            ),
          })}  
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
