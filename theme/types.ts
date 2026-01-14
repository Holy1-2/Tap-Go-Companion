export interface Route {
  id: string;
  lineNumber: string;
  name: string;
  fare: string;
  stops: string[];
  availableBuses: {
    id: string;
    licensePlate: string;
    status: string;
    loadFactor: string;
    estimatedArrival: string;
  }[];
}

export interface TripHistory {
  id: string;
  from: string;
  to: string;
  fare: string;
  date: string;
  rating?: number;
}
export enum ScreenType {
  WELCOME = 'WELCOME',
  SIGN_UP = 'SIGN_UP',
  PLAN_TRIP = 'PLAN_TRIP',
  ACTIVE_TRIP = 'ACTIVE_TRIP',
  NOTIFICATIONS = 'NOTIFICATIONS',
  ACCOUNT_SETTINGS = 'ACCOUNT_SETTINGS',
  CARD_DETAILS = 'CARD_DETAILS',
  REWARDS = 'REWARDS',
  SAVED_PLACES = 'SAVED_PLACES',
  SCHEDULE = 'SCHEDULE',
  FEEDBACK = 'FEEDBACK',
  ERROR = 'ERROR'
}
