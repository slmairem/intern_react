// PinnedTopics.js
import React from 'react';

const PinnedTopics = ({ pinnedTopics, getFormattedDate}) => {
  return (
    <div className="top mb-8">
      {pinnedTopics.length > 0 && (
        <div className="pinned-topics mb-4 grid grid-cols-3 gap-4 text-lg">
          {pinnedTopics.map(forum => (
            <div key={forum.forumId} className="relative bg-gray-100 p-4 rounded cursor-pointer hover:shadow-md">
              <div className="absolute top-2 right-2 text-sm text-gray-600">{getFormattedDate(forum.date)}</div>
              <div className="text-sm text-gray-600">{forum.publishUser}</div>
              <div className="text-lg font-semibold">{forum.forumName}</div>
              <div className="mt-2 tags flex flex-wrap space-x-2 rounded">
                {forum.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-300 px-2 py-1 hover:text-stone-100 hover:bg-gray-400 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PinnedTopics;
