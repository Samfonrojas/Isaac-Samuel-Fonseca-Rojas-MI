
import React from 'react';
import { MissionTrip, TripStatus } from '../types';
import { MapPinIcon, CalendarIcon } from './IconComponents';

interface MissionTripCardProps {
  trip: MissionTrip;
}

const statusColors: { [key in TripStatus]: string } = {
  [TripStatus.Upcoming]: 'bg-blue-500',
  [TripStatus.Ongoing]: 'bg-green-500',
  [TripStatus.Completed]: 'bg-gray-500',
};

const MissionTripCard: React.FC<MissionTripCardProps> = ({ trip }) => {
  const statusColor = statusColors[trip.status];

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col relative">
      <span className={`absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 ${statusColor}`}>
        {trip.status}
      </span>
      <img className="w-full h-56 object-cover" src={trip.imageUrl} alt={trip.location} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-brand-primary mb-2">{trip.location}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
            <MapPinIcon className="h-4 w-4 mr-2" />
            <span>{trip.country}</span>
        </div>
         <div className="flex items-center text-gray-500 text-sm mb-4">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span>{trip.dates}</span>
        </div>
        <p className="text-gray-700 mb-4 flex-grow">{trip.description}</p>
        <button className="mt-auto w-full bg-brand-accent text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MissionTripCard;
