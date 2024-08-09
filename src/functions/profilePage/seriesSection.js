import React from 'react';

const SeriesSection = ({ seriesStatusCounts, totalSeries, rewatchedSeries, userSeries, handleItemClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-blue-500';
      case 'On Hold':
        return 'bg-yellow-500';
      case 'Watching':
        return 'bg-green-500';
      case 'Dropped':
        return 'bg-red-500';
      case 'Plan to Watch':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className='flex mb-4'>
      <div className='w-1/4'>
        <div className='mb-2 font-bold text-xl underline'>Series</div>
        {['Watching', 'Completed', 'On Hold', 'Dropped', 'Plan to Watch'].map(status => (
          <div key={status} className='mb-2 flex items-center'>
            <div className={`w-4 h-4 rounded-full ${getStatusColor(status)} mr-2`} />
            <span className='font-semibold text-gray-700'>{status}:</span>
            <span className='ml-2 text-lg text-gray-800'>
              {status === 'Completed' ? seriesStatusCounts.completed :
              status === 'On Hold' ? seriesStatusCounts.onHold :
              status === 'Watching' ? seriesStatusCounts.watching :
              status === 'Dropped' ? seriesStatusCounts.dropped :
              status === 'Plan to Watch' ? seriesStatusCounts.planToWatch : 0}
            </span>
          </div>
        ))}
      </div>
      <div className='w-1/4'>
        <br/>
        {['Total Entries', 'Rewatched', 'Episodes'].map(detail => (
          <div key={detail} className='mb-2 mt-2'>
            <span className='font-semibold text-gray-700'>{detail}:</span>
            <span className='ml-2 text-lg text-gray-800'>
              {detail === 'Total Entries' ? totalSeries :
              detail === 'Rewatched' ? rewatchedSeries : 0}
            </span>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 gap-4 w-2/4'>
        <div className='font-bold text-xl underline'>Recently Updated</div>
        {userSeries.slice(0, 3).length > 0 ? userSeries.slice(0, 3).map((series, idx) => (
          <div key={idx} className="flex items-center bg-gradient-to-br from-slate-50 to-slate-200 border p-2 rounded hover:shadow-md cursor-pointer" onClick={() => handleItemClick(series.name)}>
            <div className="flex-shrink-0 mr-4">
              <img src={series.imgSrc || 'https://via.placeholder.com/64'} alt={series.name} className="w-12 h-16 rounded" />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between">
                <h2 className="text-black text-lg font-semibold">{series.name}</h2>
                <span className="text-gray-600 text-sm">{series.episodes} Episodes</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 text-sm">{series.duration}</span>
              </div>
            </div>
          </div>
        )) : (
          <div>No series found</div>
        )}
      </div>
    </div>
  );
};

export default SeriesSection;
