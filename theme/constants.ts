import { Route, TripHistory } from './types';

export const MOCK_ROUTES: Route[] = [
  {
    id: '1',
    lineNumber: '104',
    name: 'City Express',
    fare: '250',
    stops: ['Downtown Terminal', 'Business District', 'Residential Area', 'University'],
    availableBuses: [
      {
        id: 'bus1',
        licensePlate: 'RAA 123A',
        status: 'Approaching',
        loadFactor: 'Medium',
        estimatedArrival: '5 min',
      },
      {
        id: 'bus2',
        licensePlate: 'RAA 456B',
        status: 'On Route',
        loadFactor: 'Low',
        estimatedArrival: '12 min',
      },
    ],
  },
  // Add more routes as needed
];
export const RECENT_SEARCHES = [
  'Downtown Terminal',
  'Business District',
  'University',
  'Shopping Mall',
  'Central Station',
];

export const POPULAR_DESTINATIONS = [
  'Airport',
  'City Center',
  'Nyarugenge Tower',
  'Kigali Convention Center',
  'Nyamirambo Stadium',
];
export const MOCK_HISTORY: TripHistory[] = [
  {
    id: '1',
    from: 'Home',
    to: 'Central Station',
    fare: '250',
    date: 'Today, 08:30 AM',
    rating: 5,
  },
  {
    id: '2',
    from: 'Office',
    to: 'Shopping Mall',
    fare: '300',
    date: 'Yesterday, 06:15 PM',
    rating: 4,
  },
  // Add more history items
];