import React, { useState } from 'react';
import Category from './Category';
import SearchBar from './SearchBar';
import AddWidgetModal from './AddWidgetModal';
import './Dashboard.css';

const initialJsonData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random text for Widget 1" },
        { id: 2, name: "Widget 2", text: "Random text for Widget 2" }
      ]
    }
  ]
};

const Dashboard = () => {
  const [data, setData] = useState(initialJsonData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const addWidget = (categoryId, widget) => {
    const updatedData = data.categories.map(category => {
      if (category.id === categoryId) {
        return { ...category, widgets: [...category.widgets, widget] };
      }
      return category;
    });
    setData({ categories: updatedData });
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedData = data.categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter(widget => widget.id !== widgetId)
        };
      }
      return category;
    });
    setData({ categories: updatedData });
  };

  return (
    <div className="dashboard-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="categories">
        {data.categories.map(category => (
          <Category
            key={category.id}
            category={category}
            addWidget={addWidget}
            removeWidget={removeWidget}
            searchTerm={searchTerm}
          />
        ))}
      </div>
      <button className="add-widget-btn" onClick={() => setModalOpen(true)}>
        + Add Widget
      </button>
      {isModalOpen && (
        <AddWidgetModal
          closeModal={() => setModalOpen(false)}
          addWidget={addWidget}
          categories={data.categories}
        />
      )}
    </div>
  );
};

export default Dashboard;
