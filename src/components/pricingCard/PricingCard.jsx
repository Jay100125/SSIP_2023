import React from 'react';
import "./pricingcard.css"
const PricingCard = ({ title, price, features }) => {
    return (
        <div className="sample">
            <div className="pricing-card">
                <h3 className="pricing-title">{title}</h3>
                <div className="pricing-price">₹ {price}</div>
                <ul className="pricing-features">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button className="pricing-button">Get Started</button>
            </div>
        </div>
    );
};

export default PricingCard;
