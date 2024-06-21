// src/Modal.tsx
import React from 'react';
import { Country } from './types';

interface ModalProps {
  country: Country;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ country, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-500">Close</button>
        <h2 className="text-xl font-bold mb-4">{country.name.common}</h2>
        <img src={country.flags?.png} alt={`${country.name.common} flag`} className="w-full h-auto mb-4" />
        <p><strong>Official Name:</strong> {country.name.official}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Subregion:</strong> {country.subregion}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Capital:</strong> {country.capital.join(', ')}</p>
        {country.currencies && (
          <p><strong>Currency:</strong> {Object.values(country.currencies)[0]?.name} ({Object.values(country.currencies)[0]?.symbol})</p>
        )}
        {country.languages && (
          <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
