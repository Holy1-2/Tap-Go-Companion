import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusBar = ({ time = "9:41" }) => {
  return (
    <View style={styles.statusBar}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.rightIcons}>
        <View style={styles.signalBars}>
          <View style={[styles.bar, { height: 4 }]} />
          <View style={[styles.bar, { height: 6 }]} />
          <View style={[styles.bar, { height: 8 }]} />
          <View style={[styles.bar, { height: 10 }]} />
        </View>
        <View style={styles.wifi}>
          <View style={styles.wifiIcon} />
        </View>
        <View style={styles.battery}>
          <View style={styles.batteryLevel} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    height: 44,
  },
  time: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    width: 3,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  wifi: {
    width: 15,
    height: 11,
    marginLeft: 5,
  },
  wifiIcon: {
    width: 15,
    height: 11,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    marginLeft: 5,
    position: 'relative',
  },
  batteryLevel: {
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 1,
  },
});

export default StatusBar;
