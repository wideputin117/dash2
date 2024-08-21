import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Widget.css';

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button className="remove-widget-btn" onClick={removeWidget}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default Widget;
