import React from 'react';
import { Link } from 'react-router-dom';

const NewsSection = ({ recentNews }) => (
  <div className="mb-5">
    <h3 className="text-xl font-semibold">Recently News</h3>
    <div className="grid grid-cols-3 gap-4 mb-2">
      {recentNews.map((news) => (
        <div key={news.newsId} className="flex bg-gray-100 p-3 rounded cursor-pointer hover:shadow-md">
          <img
            src={news.imgSrc}
            alt={news.newsName}
            className="w-20 h-20 mr-2 rounded"
          />
          <div className="flex flex-col justify-between">
            <div className="font-semibold line-clamp-1">{news.newsName}</div>
            <div className="line-clamp-3">{news.content}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="ml-4 text-right mb-2">
      <Link to="/news" className="text-blue-500 no-underline cursor-pointer pt-2 font-semibold hover:text-blue-900">View More...</Link>
    </div>
  </div>
);

export default NewsSection;
