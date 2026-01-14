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