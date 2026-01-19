import React from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './components/Portfolio';

// Get portfolio data from the data attribute
document.addEventListener('DOMContentLoaded', () => {
  const portfolioDataElement = document.getElementById('portfolio-data');
  if (portfolioDataElement) {
    const portfolioData = JSON.parse(portfolioDataElement.textContent);
    const container = document.getElementById('portfolio-root');
    if (container) {
      const root = createRoot(container);
      root.render(React.createElement(Portfolio, { data: portfolioData }));
    }
  }
});

