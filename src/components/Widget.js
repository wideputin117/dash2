// src/components/Widget.js
import React from 'react';

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button className="remove-widget" onClick={removeWidget}>×</button>
    </div>
  );
};

export default Widget;
