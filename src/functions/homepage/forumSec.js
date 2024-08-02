import React from 'react';
import { Link } from 'react-router-dom';

const ForumSection = ({ forumTopics }) => (
  <div className="mb-5">
    <h3 className="text-xl font-semibold">Forum Topics</h3>
    {forumTopics.map((forum) => (
      <div key={forum.forumId} className="bg-gray-100 p-4 rounded mb-2 cursor-pointer hover:shadow-md">
        <div className="text-sm text-gray-600">{forum.publishUser}</div>
        <div className="text-md font-semibold">{forum.forumName}</div>
      </div>
    ))}
    <div className="ml-4 text-right mb-2">
      <Link to="/forum" className="text-blue-500 no-underline cursor-pointer pt-2 font-semibold hover:text-blue-900">View More...</Link>
    </div>
  </div>
);

export default ForumSection;
