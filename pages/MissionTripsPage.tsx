
import React, { useState, useMemo } from 'react';
import MissionTripCard from '../components/MissionTripCard';
import { MissionTrip, TripStatus } from '../types';

const mockMissionTrips: MissionTrip[] = [
  {
    id: 1,
    location: 'Chiang Mai',
    country: 'Thailand',
    dates: 'March 5 - 19, 2024',
    description: 'Partnering with local churches to provide educational workshops and community support in northern Thailand.',
    imageUrl: 'https://picsum.photos/seed/thailand/800/600',
    status: TripStatus.Upcoming,
  },
  {
    id: 2,
    location: 'Nairobi',
    country: 'Kenya',
    dates: 'January 10 - 24, 2024',
    description: 'Working in a medical clinic and helping with the construction of a new orphanage wing.',
    imageUrl: 'https://picsum.photos/seed/kenya/800/600',
    status: TripStatus.Upcoming,
  },
  {
    id: 3,
    location: 'Amazonas',
    country: 'Brazil',
    dates: 'November 1-15, 2023',
    description: 'A medical and dental mission via riverboat to bring essential services to remote villages along the Amazon River.',
    imageUrl: 'https://picsum.photos/seed/brazil/800/600',
    status: TripStatus.Ongoing,
  },
  {
    id: 4,
    location: 'Port-au-Prince',
    country: 'Haiti',
    dates: 'August 12 - 26, 2023',
    description: 'Disaster relief efforts and rebuilding homes in communities affected by recent storms.',
    imageUrl: 'https://picsum.photos/seed/haiti-trip/800/600',
    status: TripStatus.Completed,
  },
  {
    id: 5,
    location: 'Kampala',
    country: 'Uganda',
    dates: 'June 3 - 17, 2023',
    description: 'Teaching and youth outreach program in partnership with local schools and community centers.',
    imageUrl: 'https://picsum.photos/seed/uganda-trip/800/600',
    status: TripStatus.Completed,
  },
  {
    id: 6,
    location: 'Lima',
    country: 'Peru',
    dates: 'May 1 - 15, 2023',
    description: 'Supported a local feeding program and helped establish a community garden for sustainable food.',
    imageUrl: 'https://picsum.photos/seed/peru-trip/800/600',
    status: TripStatus.Completed,
  },
];

type FilterType = TripStatus | 'All';

const MissionTripsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredTrips = useMemo(() => {
    if (activeFilter === 'All') {
      return mockMissionTrips;
    }
    return mockMissionTrips.filter(trip => trip.status === activeFilter);
  }, [activeFilter]);

  const getButtonClasses = (filter: FilterType) => {
    return `px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
      activeFilter === filter
        ? 'bg-brand-primary text-white shadow-md'
        : 'bg-white text-brand-primary hover:bg-gray-200'
    }`;
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-brand-primary">Our Mission Trips</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our past, present, and future missions. Each one represents an opportunity to serve and be a part of something greater.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-12">
        <button onClick={() => setActiveFilter('All')} className={getButtonClasses('All')}>All Trips</button>
        <button onClick={() => setActiveFilter(TripStatus.Upcoming)} className={getButtonClasses(TripStatus.Upcoming)}>Upcoming</button>
        <button onClick={() => setActiveFilter(TripStatus.Ongoing)} className={getButtonClasses(TripStatus.Ongoing)}>Ongoing</button>
        <button onClick={() => setActiveFilter(TripStatus.Completed)} className={getButtonClasses(TripStatus.Completed)}>Completed</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredTrips.map(trip => (
          <MissionTripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default MissionTripsPage;
