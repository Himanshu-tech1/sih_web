import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PortalCards.css';

const cardsData = [
  {
    id: 'employer',
    title: 'Employer\nDashboard',
    description: 'Find skilled students and employees',
    path: '/employer/login'
  },
  {
    id: 'institute',
    title: 'Institute\nDashboard',
    description: 'Manage courses and student skills',
    path: '/institute/login'
  },
  {
    id: 'student',
    title: 'Student\nDashboard',
    description: 'Build skills and find opportunities',
    path: '/student/login'
  }
];

const PortalCards = () => {
  const navigate = useNavigate();

  return (
    <section className="portal-cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className="portal-card">
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
          <button 
            className="card-button"
            onClick={() => navigate(card.path)}
          >
            Open Dashboard
          </button>
        </div>
      ))}
    </section>
  );
};

export default PortalCards;
