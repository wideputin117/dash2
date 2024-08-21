// src/components/Category.js
import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Category = ({ category }) => {
  const [widgets, setWidgets] = useState(category.widgets);

  const addWidget = (widget) => {
    setWidgets([...widgets, widget]);
  };

  const removeWidget = (widgetId) => {
    setWidgets(widgets.filter((widget) => widget.id !== widgetId));
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widget-list">
        {widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} removeWidget={() => removeWidget(widget.id)} />
        ))}
      </div>
      <AddWidgetForm addWidget={addWidget} />
    </div>
  );
};

export default Category;
