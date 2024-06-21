// src/CountryCard.tsx
import React from 'react';
import { Country } from './types';

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
      <div className="h-auto overflow-hidden">
        <div className="h-44 overflow-hidden relative">
          <img src={country.flags?.png} alt={`${country.name.common} flag`} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="bg-white py-4 px-3">
        <h3 className="text-xs mb-2 font-medium">{country.name.common}</h3>
        <p className="text-xs text-gray-400">Official Name: {country.name.official}</p>
        {country.currencies && (
          <p className="text-xs text-gray-400">
            Currency: {Object.values(country.currencies)[0]?.name} ({Object.values(country.currencies)[0]?.symbol})
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
