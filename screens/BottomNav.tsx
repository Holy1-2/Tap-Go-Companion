
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ScreenType } from './../theme/types';
import { HomeIcon, WalletIcon, UserIcon, BusIcon, RewardIcon } from './icons';

interface Props {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

const BottomNav: React.FC<Props> = ({ currentScreen, onNavigate }) => {
  const tabs = [
    { type: ScreenType.PLAN_TRIP, label: 'Explore', Icon: HomeIcon },
    { type: ScreenType.SCHEDULE, label: 'Trips', Icon: BusIcon },
    { type: ScreenType.CARD_DETAILS, label: 'Wallet', Icon: WalletIcon },
    { type: ScreenType.REWARDS, label: 'Rewards', Icon: RewardIcon },
    { type: ScreenType.ACCOUNT_SETTINGS, label: 'Profile', Icon: UserIcon },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {tabs.map((tab) => {
          const isActive = currentScreen === tab.type;
          return (
            <TouchableOpacity
              key={tab.type}
              style={styles.tab}
              onPress={() => onNavigate(tab.type)}
              activeOpacity={0.7}
            >
              <tab.Icon 
                size={22} 
                color={isActive ? '#FFF' : '#717171'} 
              />
              <Text style={[styles.label, isActive && styles.activeLabel]}>
                {tab.label}
              </Text>
              {isActive && <View style={styles.indicator} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30, // Elevated from bottom
    left: 16,
    right: 16,
    zIndex: 1000,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#111111',
    height: 72,
    borderRadius: 36, // Highly rounded pill shape
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    color: '#717171',
    fontWeight: '600',
  },
  activeLabel: {
    color: '#FFF',
  },
  indicator: {
    position: 'absolute',
    bottom: 8,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FF385C',
  }
});

export default BottomNav;
