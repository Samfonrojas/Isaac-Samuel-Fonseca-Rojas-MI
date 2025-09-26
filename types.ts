
export enum TripStatus {
  Upcoming = 'Upcoming',
  Ongoing = 'Ongoing',
  Completed = 'Completed',
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}

export interface MissionTrip {
  id: number;
  location: string;
  country: string;
  dates: string;
  description: string;
  imageUrl: string;
  status: TripStatus;
}
