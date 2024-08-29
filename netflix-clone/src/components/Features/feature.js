import React, { useState } from 'react';
import './Features.css';
import cancelIcon from '../../assets/cancel.svg';
import watchAnywhereIcon from '../../assets/watchanywhere.svg';
import pickPriceIcon from '../../assets/pickprice.svg';
import cancelAnytimeImg from '../../assets/cancelanytime_withdevice.png';
import tvImg from '../../assets/asset_TV_UI.png';
import mobileImg from '../../assets/asset_mobile_tablet_UI_2.png';
import websiteImg from '../../assets/asset_website_UI.png';
import './features.css';  

// FeatureCard Component
const FeatureCard = ({ imgSrc, title, description }) => (
  <div className="feature-card">
    <img src={imgSrc} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

// FeatureTable Component
const FeatureTable = ({ plans }) => (
  <table className="features-table">
    <thead>
      <tr>
        <th></th>
        {plans.map(plan => (
          <th key={plan.name}>{plan.name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {plans[0].features.map((feature, index) => (
        <tr key={index}>
          <td>{feature.label}</td>
          {plans.map(plan => (
            <td key={plan.name}>{plan[feature.key] ? '✔️' : '❌'}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

// Main Features Component
const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState('cancelanytime');

  const featureData = {
    cancelanytime: {
      title: 'İstediğiniz zaman iptal edin',
      description: 'Netflix’in sizin için olmadığını düşünürseniz, endişelenmeyin. İstediğiniz zaman iptal edin.',
      imgSrc: 'img/cancelanytime_withdevice.png',
    },
    watchanywhere: {
      title: 'Her yerde izleyin',
      description: 'TV dizilerini ve filmleri istediğiniz zaman, istediğiniz yerde izleyin.',
      imgSrc: 'img/asset_TV_UI.png',
    },
    pickprice: {
      title: 'Fiyatınızı seçin',
      description: 'Bir plan seçin ve Netflix’te her şeyi izleyin.',
      imgSrc: 'img/asset_mobile_tablet_UI_2.png',
    },
  };

  const plans = [
    {
      name: 'Temel',
      features: [
        { label: 'Ücretsiz ay sonunda aylık fiyat', key: 'price' },
        { label: 'HD mevcut', key: 'hd' },
        { label: 'Ultra HD mevcut', key: 'ultraHD' },
        { label: 'Aynı anda izleyebileceğiniz ekranlar', key: 'screens' },
        { label: 'Dizüstü bilgisayar, TV, telefon ve tablette izleyin', key: 'devices' },
        { label: 'Sınırsız film ve TV şovu', key: 'unlimited' },
        { label: 'İstediğiniz zaman iptal edin', key: 'cancelAnytime' },
        { label: 'İlk ay ücretsiz', key: 'freeTrial' },
      ],
      price: 'EUR7.99',
      hd: false,
      ultraHD: false,
      screens: 1,
      devices: true,
      unlimited: true,
      cancelAnytime: true,
      freeTrial: true,
    },
    {
      name: 'Standart',
      features: [
        { label: 'Ücretsiz ay sonunda aylık fiyat', key: 'price' },
        { label: 'HD mevcut', key: 'hd' },
        { label: 'Ultra HD mevcut', key: 'ultraHD' },
        { label: 'Aynı anda izleyebileceğiniz ekranlar', key: 'screens' },
        { label: 'Dizüstü bilgisayar, TV, telefon ve tablette izleyin', key: 'devices' },
        { label: 'Sınırsız film ve TV şovu', key: 'unlimited' },
        { label: 'İstediğiniz zaman iptal edin', key: 'cancelAnytime' },
        { label: 'İlk ay ücretsiz', key: 'freeTrial' },
      ],
      price: 'EUR9.99',
      hd: true,
      ultraHD: false,
      screens: 2,
      devices: true,
      unlimited: true,
      cancelAnytime: true,
      freeTrial: true,
    },
    {
      name: 'Premium',
      features: [
        { label: 'Ücretsiz ay sonunda aylık fiyat', key: 'price' },
        { label: 'HD mevcut', key: 'hd' },
        { label: 'Ultra HD mevcut', key: 'ultraHD' },
        { label: 'Aynı anda izleyebileceğiniz ekranlar', key: 'screens' },
        { label: 'Dizüstü bilgisayar, TV, telefon ve tablette izleyin', key: 'devices' },
        { label: 'Sınırsız film ve TV şovu', key: 'unlimited' },
        { label: 'İstediğiniz zaman iptal edin', key: 'cancelAnytime' },
        { label: 'İlk ay ücretsiz', key: 'freeTrial' },
      ],
      price: 'EUR11.99',
      hd: true,
      ultraHD: true,
      screens: 4,
      devices: true,
      unlimited: true,
      cancelAnytime: true,
      freeTrial: true,
    },
  ];

  const handleFeatureChange = (featureKey) => {
    setSelectedFeature(featureKey);
  };

  return (
    <div className="features-container">
      <nav className="features-nav">
        {Object.keys(featureData).map(key => (
          <a
            key={key}
            className={selectedFeature === key ? 'is-selected' : ''}
            onClick={() => handleFeatureChange(key)}
            href="#"
          >
            <img src={`img/${key}.svg`} alt={featureData[key].title} />
            <h2>{featureData[key].title}</h2>
          </a>
        ))}
      </nav>
      <section className={`features-section ${selectedFeature}`}>
        <FeatureCard
          imgSrc={featureData[selectedFeature].imgSrc}
          title={featureData[selectedFeature].title}
          description={featureData[selectedFeature].description}
        />
        {selectedFeature === 'pickprice' && <FeatureTable plans={plans} />}
      </section>
    </div>
  );
};

export default Features;
