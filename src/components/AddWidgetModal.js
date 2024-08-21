import React, { useState } from 'react';
import './AddWidgetModal.css';

const AddWidgetModal = ({ closeModal, addWidget, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    const newWidget = { id: Date.now(), name: widgetName, text: widgetText };
    addWidget(selectedCategory, newWidget);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Widget</h2>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>Add Widget</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
