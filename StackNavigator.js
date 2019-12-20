//import liraries
import React from 'react';
import EventsView from './screens/EventsView';
import EventsMapView from './screens/EventsMapView';
import CalendarView from './screens/calendar/CalendarView';
import CalendarEventView from './screens/calendar/CalendarEventView';
import InterestsView from './screens/onboarding/InterestsView';
import EventDetailsView from './screens/EventDetailsView';
import SettingsView from './screens/SettingsView';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator = () => {
  console.log(Stack.Screen.defaultProps)
  return (
    <NavigationNativeContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="EventsView" 
            component={EventsView} 
            options={{
              headerShown: false
            }}
            />
          <Stack.Screen 
            name="EventsMapView" 
            options={{
              title:"Events Map"
            }}
            component={EventsMapView} />
          <Stack.Screen 
            name="CalendarView" 
            component={CalendarView}
            options={{
              title:"Calendar"
            }} />
          <Stack.Screen 
            name="CalendarEventView" 
            component={CalendarEventView}
            options={{
              title:"Events"
            }} />
          <Stack.Screen 
            name="InterestsView" 
            component={InterestsView}
            options={{
              
            }} />
          <Stack.Screen 
            name="EventDetailsView" 
            component={EventDetailsView}
            options={{
              
            }} />
          <Stack.Screen 
            name="SettingsView" 
            component={SettingsView}
            options={{
              
            }} />
        </Stack.Navigator>
      </NavigationNativeContainer>
    );
};

export default StackNavigator;
