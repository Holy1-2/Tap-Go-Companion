import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeView } from './screens/HomeView';
import { SearchView } from './screens/SearchView';
import { RouteDetailView } from './screens/RouteDetailView';
import { TripModeView } from './screens/TripModeView';
import { FeedbackView } from './screens/FeedbackView';
import { ActivityView } from './screens/ActivityView';
import { AccountView } from './screens/AccountView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
          height: 80,
          paddingBottom: 8,
          paddingTop: 12,
        },
        tabBarActiveTintColor: '#000000ff',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'Inter-Medium',
        },
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeView}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? 'home' : 'home-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="SearchTab" 
        component={SearchView}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? 'magnify' : 'magnify'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="ActivityTab" 
        component={ActivityView}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? 'history' : 'history'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="AccountTab" 
        component={AccountView}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? 'account' : 'account-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main App
export default function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="RouteDetail" component={RouteDetailView} />
        <Stack.Screen name="TripMode" component={TripModeView} />
        <Stack.Screen name="Feedback" component={FeedbackView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}