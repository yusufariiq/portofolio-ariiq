import React from 'react';

export function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="relative flex justify-center mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 mx-2 rounded-lg transition-colors duration-200 ${
            activeTab === tab
              ? 'bg-button text-white'
              : 'bg-secondary hover:bg-button/80'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

