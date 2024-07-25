import React from 'react';

const BarChart = () => {
  const data = [
    { label: '1', value: 20 },
    { label: '2', value: 40 },
    { label: '3', value: 60 },
    { label: '4', value: 50 },
    { label: '5', value: 80 },
  ];

  return (
    <div className="w-full h-full flex items-end justify-between">
      {data.map((item) => (
        <div key={item.label} className="relative flex flex-col items-center">
          <div
            className="bg-blue-500 hover:bg-blue-950 rounded-lg mr-2"
            style={{ height: `${item.value}px`, width: '24px', transition: 'height 0.3s' }}
          >
          </div>
          <span className="mt-1 text-gray-700 text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
