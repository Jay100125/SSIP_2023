import React from 'react';
import PricingCard from './../../components/pricingCard/PricingCard'; // Import your PricingCard component
import "./pricing.css"

const App = () => {
  const pricingData = [
    {
      title: 'Basic',
      price: 599,
      features: ['30 job postings', 'Job displayed for 15 days', 'Premium Support 24/7'],
    },
    {
      title: 'Standard',
      price: 899,
      features: ['40 job postings', 'Job displayed for 30 days', 'Premium Support 24/7'],
    },
    {
      title: 'Extended',
      price: 1299,
      features: ['50 job postings', 'Job displayed for 60 days', 'Premium Support 24/7'],
    },
  ];

  return (
    <div className="App">
      <div className="pricing-cards-container">
        {pricingData.map((pricing, index) => (
          <PricingCard key={index} title={pricing.title} price={pricing.price} features={pricing.features} />
        ))}
      </div>
    </div>
  );
};

export default App;
