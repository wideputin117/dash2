// src/components/AddWidgetForm.js
import React, { useState } from 'react';

const AddWidgetForm = ({ addWidget, closeForm }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now().toString(),
      name: widgetName,
      text: widgetText,
    };
    addWidget(newWidget);
  };

  return (
    <div className="add-widget-form-wrapper">
      <div className="add-widget-form">
        <button className="close-form" onClick={closeForm}>×</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            required
          />
          <button type="submit">Add Widget</button>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetForm;
