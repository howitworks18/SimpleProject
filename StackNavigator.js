//import liraries
import React from 'react';
import EventsView from './screens/EventsView';
import EventsMapView from './screens/EventsMapView';
import CalendarView from './screens/calendar/CalendarView';
import CalendarEventView from './screens/calendar/CalendarEventView';
import ProfileInfoView from './screens/onboarding/ProfileInfoView';
import InterestsView from './screens/onboarding/InterestsView';
import LoginView from './screens/LoginView';
import EventDetailsView from './screens/EventDetailsView';
import SettingsView from './screens/SettingsView';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationNativeContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="ProfileInfoView" 
            component={ProfileInfoView}
            options={{
              
            }} />
          <Stack.Screen 
            name="LoginView" 
            component={LoginView}
            options={{
              
            }} />
          <Stack.Screen 
            name="EventsView" 
            component={EventsView} 
            options={{
              title:"Events",
              headerLeft: null
            }}/>
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
