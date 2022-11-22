import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import Text from './src/components/text/text';
import { NavigationContainer, DarkTheme, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Details from './src/screens/details';


const Stack = createNativeStackNavigator();


export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require("./assets/fonts/Antonio-Medium.ttf"),
    'Spartan-Bold': require("./assets/fonts/Spartan-Bold.ttf"),
    'Spartan-Medium': require("./assets/fonts/Spartan-Medium.ttf"),
  });

  if(!loaded){
    <Text>Font Loading...</Text>
  }
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions ={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light'/>
    </>
    
      
    
  );
}

const styles = StyleSheet.create({container:{
    flex: 1,
  },
  
});
