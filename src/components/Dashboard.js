// src/components/Dashboard.js
import React from 'react';
import Category from './Category';
import initialData from '../data/dashboardData';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {initialData.categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;
