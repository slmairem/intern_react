import React from 'react';

const BarChart = ({ data }) => {
  return (
    <div className="w-full h-full flex items-end justify-between bg-white p-6 rounded border">
      {data.map((item) => (
        <div key={item.label} className="relative flex flex-col items-center">
          <div
            className="bg-blue-500 hover:bg-blue-950 rounded-lg mr-2"
            style={{ height: `${item.value}px`, width: '24px', transition: 'height 0.3s' }}
          >
          </div>
          <span className="mt-1 text-gray-700 text-md">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
