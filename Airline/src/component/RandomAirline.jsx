import { useState, useEffect } from 'react';

const partnerPrograms = [
  'Air Canada',
  'United Airlines',
  'KLM',
  'Qantas',
  'American Airlines',
  'Etihad Airways',
  'Alaska Airlines',
  'Qatar Airways',
  'LifeMiles'
];

const getRandomPartner = () => {
  return partnerPrograms[Math.floor(Math.random() * partnerPrograms.length)];
};

export default function RandomAirline({ onRandomPartnerChange }) {
  const [programPartner, setProgramPartner] = useState('');

  useEffect(() => {
    const randomPartner = getRandomPartner();
    setProgramPartner(randomPartner);
    onRandomPartnerChange(randomPartner);
  }, [onRandomPartnerChange]);

  return null;
}
