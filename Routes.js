import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import SplashScreen from './src/pages/SplashScreen';
import Home from './src/pages/Home';
import Product from './src/pages/Product';
import Profile from './src/pages/Profile';
import Favorite from './src/pages/Favorite';
import Settings from './src/pages/Settings';
import NewListing from './src/pages/NewListing';
import MyListing from './src/pages/MyListing';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { AuthContext } from './src/context/AuthContext';

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MyListing'
        options={{ headerShown: false }}
        component={MyListing}
      />
      <Stack.Screen
        name='Settings'
        options={{ headerShown: false }}
        component={Settings}
      />
    </Stack.Navigator>
  );
};
function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='bookmark' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Routes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Product'
        component={Product}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BottomTabs'
        options={{ headerShown: false }}
        component={BottomTabs}
      />
      <Stack.Screen
        name='NewListing'
        options={{ headerShown: false }}
        component={NewListing}
      />
    </Stack.Navigator>
  );
};
export default Routes;
