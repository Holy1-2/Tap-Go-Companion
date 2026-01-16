import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import { ScreenType } from './theme/types';
import { useAppFonts } from './../QueueLess/hooks/useFonts';

// Screens
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import PlanTripScreen from './screens/PlanTripScreen';
import ActiveTripScreen from './screens/ActiveTripScreen';
import NotificationsScreen from './screens/NotificationScreens';
import AccountSettingsScreen from './screens/AccountSettingsScreen';
import CardDetailsScreen from './screens/CardDetails';
import RewardsScreen from './screens/RewardsScreen';
import SavedPlacesScreen from './screens/SavedPlace';
import ScheduleScreen from './screens/ScheduleScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import ErrorScreen from './screens/ErrorScreen';
import BottomNav from './screens/BottomNav';

const App: React.FC = () => {
  /* ---------- Load Fonts ---------- */
  const fontsLoaded = useAppFonts();

  /* ---------- App Navigation State ---------- */
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(
    ScreenType.WELCOME
  );

  const navigateTo = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  /* ---------- Bottom Navigation Visibility ---------- */
  const showBottomNav = [
    ScreenType.PLAN_TRIP,
    ScreenType.SCHEDULE,
    ScreenType.CARD_DETAILS,
    ScreenType.REWARDS,
    ScreenType.ACCOUNT_SETTINGS,
    ScreenType.SAVED_PLACES,
    ScreenType.NOTIFICATIONS,
  ].includes(currentScreen);

  /* ---------- Screen Renderer ---------- */
  const renderScreen = () => {
    switch (currentScreen) {
      case ScreenType.WELCOME:
        return <WelcomeScreen onNavigate={() => navigateTo(ScreenType.SIGN_UP)} />;

      case ScreenType.SIGN_UP:
        return <SignUpScreen onNavigate={() => navigateTo(ScreenType.PLAN_TRIP)} />;

      case ScreenType.PLAN_TRIP:
        return (
          <PlanTripScreen
            onNavigate={() => navigateTo(ScreenType.ACTIVE_TRIP)}
            onGoNotifications={() => navigateTo(ScreenType.NOTIFICATIONS)}
            onGoAccount={() => navigateTo(ScreenType.ACCOUNT_SETTINGS)}
            onGoCard={() => navigateTo(ScreenType.CARD_DETAILS)}
            onGoSchedule={() => navigateTo(ScreenType.SCHEDULE)}
          />
        );

      case ScreenType.ACTIVE_TRIP:
        return (
          <ActiveTripScreen
            onNavigate={() => navigateTo(ScreenType.FEEDBACK)}
            onError={() => navigateTo(ScreenType.ERROR)}
          />
        );

      case ScreenType.NOTIFICATIONS:
        return (
          <NotificationsScreen
            onBack={() => navigateTo(ScreenType.PLAN_TRIP)}
          />
        );

      case ScreenType.ACCOUNT_SETTINGS:
        return (
          <AccountSettingsScreen
            onBack={() => navigateTo(ScreenType.PLAN_TRIP)}
            onLogout={() => navigateTo(ScreenType.WELCOME)}
            onGoCard={() => navigateTo(ScreenType.CARD_DETAILS)}
            onGoRewards={() => navigateTo(ScreenType.REWARDS)}
            onGoSavedPlaces={() => navigateTo(ScreenType.SAVED_PLACES)}
            onGoAccount={() => {}}
          />
        );

      case ScreenType.CARD_DETAILS:
        return <CardDetailsScreen onBack={() => navigateTo(ScreenType.PLAN_TRIP)} />;

      case ScreenType.REWARDS:
        return <RewardsScreen onBack={() => navigateTo(ScreenType.ACCOUNT_SETTINGS)} />;

      case ScreenType.SAVED_PLACES:
        return <SavedPlacesScreen onBack={() => navigateTo(ScreenType.ACCOUNT_SETTINGS)} />;

      case ScreenType.SCHEDULE:
        return <ScheduleScreen onBack={() => navigateTo(ScreenType.PLAN_TRIP)} />;

      case ScreenType.FEEDBACK:
        return <FeedbackScreen onNavigate={() => navigateTo(ScreenType.PLAN_TRIP)} />;

      case ScreenType.ERROR:
        return <ErrorScreen onNavigate={() => navigateTo(ScreenType.PLAN_TRIP)} />;

      default:
        return <WelcomeScreen onNavigate={() => navigateTo(ScreenType.SIGN_UP)} />;
    }
  };

  /* ---------- Font Loading Screen ---------- */
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loader}>
        <ActivityIndicator size="large" color="#2563EB" />
      </SafeAreaView>
    );
  }

  /* ---------- App Root ---------- */
  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {renderScreen()}

        {showBottomNav && (
          <BottomNav
            currentScreen={currentScreen}
            onNavigate={navigateTo}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    maxWidth: 500, // professional desktop constraint
    alignSelf: 'center',
    width: '100%',
    overflow: 'hidden',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
