import EventsView from './screens/EventsView';
import EventsMapView from './screens/EventsMapView';
import CalendarView from './screens/calendar/CalendarView';
import CalendarEventView from './screens/calendar/CalendarEventView';
import InterestsView from './screens/onboarding/InterestsView';
import ProfileInfoView from './screens/onboarding/ProfileInfoView';
import EventDetailsView from './screens/EventDetailsView';
import SettingsView from './screens/SettingsView';
import NavigationBar from './ui-kit/NavigationBar';
import { createAppContainer } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';


const AppNavigator = FluidNavigator({
  EventsView: {
    screen: EventsView,
  },
  ProfileInfoView: {
    screen: ProfileInfoView,
  },
  EventsMapView: {
    screen: EventsMapView,
  },
  CalendarView: {
    screen: CalendarView,
  },
  CalendarEventView: {
    screen: CalendarEventView,
  },
  EventDetailsView: {
    screen: EventDetailsView,
  },
  SettingsView: {
    screen: SettingsView,
  },
  InterestsView: {
    screen: InterestsView,
  },
  //components
  NavigationBar: {
    screen: NavigationBar,
  },
});

export default createAppContainer(AppNavigator);