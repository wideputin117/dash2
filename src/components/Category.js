import React from 'react';
import Widget from './Widget';
import './Category.css';

const Category = ({ category, removeWidget, searchTerm }) => {
  const filteredWidgets = category.widgets.filter(widget =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {filteredWidgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(category.id, widget.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
