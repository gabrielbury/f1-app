import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, ScheduleScreen, DriversScreen, TeamsScreen, ChampionshipScreen } from '../screens/';
import Ionicons from '@expo/vector-icons/Ionicons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={24} />
            ),
          }} />
        
        <Tab.Screen name="Schedule" component={ScheduleScreen} options={{
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar-outline" color={color} size={24} />
            ),
          }} />

        <Tab.Screen name="Drivers" component={DriversScreen} options={{
            tabBarLabel: 'Drivers',
            tabBarIcon: ({ color }) => (
              <Ionicons name="people-outline" color={color} size={24} />
            ),
          }} />

        <Tab.Screen name="Teams" component={TeamsScreen} options={{
            tabBarLabel: 'Teams',
            tabBarIcon: ({ color }) => (
              <Ionicons name="construct-outline" color={color} size={24} />
            ),
          }} />

        <Tab.Screen name="Championship" component={ChampionshipScreen} options={{
            tabBarLabel: 'Classification',
            tabBarIcon: ({ color }) => (
              <Ionicons name="podium-outline" color={color} size={24} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
  
}