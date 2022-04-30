import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import CreateLogin from './src/pages/login/CreateLogin';
import Login from './src/pages/login/Login';
import Menu from './src/components/Menu';
import Cards from './src/pages/cards/Cards';
import NewCollection from './src/pages/collections/NewCollection';

const Stack = createStackNavigator();

const options = {
  title: "MindBooster",
  headerTitleStyle: {
    color: 'white',
    fontSize: 20,
    flexGrow: 1,
    textAlignVertical: 'center',
  },
  headerStyle: {
    backgroundColor: '#4A4568',
  },
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={Login} options={ {headerShown: false} } />
        <Stack.Screen name="menu" component={Menu} options={ {headerShown: false} }/>
        <Stack.Screen name="createLogin" component={CreateLogin} options={ {headerShown: false} }/>
        <Stack.Screen name="cards" component={Cards} />
        <Stack.Screen name="newCollection" component={NewCollection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
