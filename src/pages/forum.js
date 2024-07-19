import React, { useState, useEffect } from 'react';
import data from '../assets/forumData.json'; 

function Forum() {
  const [topics, setTopics] = useState([]);
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTopic, setNewTopic] = useState({
    forumName: '',
    pinned: 'noPin',
    description: '',
    tags: [],
    publishUser: '',
  });

  const topicsPerPage = 5;
  const pinnedTopics = topics.filter(topic => topic.pinned === 'pinned');
  const nonPinnedTopics = topics.filter(topic => topic.pinned !== 'pinned');
  const filteredNonPinnedData = filter === 'All' ? nonPinnedTopics : nonPinnedTopics.filter(item => item.tags.includes(filter));
  const currentTopics = filteredNonPinnedData.slice((currentPage - 1) * topicsPerPage, currentPage * topicsPerPage);
  const totalPages = Math.ceil(filteredNonPinnedData.length / topicsPerPage);

  const handleCreateTopicClick = () => setShowCreateForm(true);
  const handleFormChange = (e) => setNewTopic({ ...newTopic, [e.target.name]: e.target.value });
  const handleTagsChange = (e) => setNewTopic({ ...newTopic, tags: Array.from(e.target.selectedOptions, option => option.value) });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTopicId = topics.length ? Math.max(...topics.map(t => t.forumId)) + 1 : 1;
    const updatedTopics = [...topics, { ...newTopic, forumId: newTopicId }];
    localStorage.setItem('forumData', JSON.stringify(updatedTopics));
    setTopics(updatedTopics);
    setNewTopic({ forumName: '', pinned: 'noPin', description: '', tags: [], publishUser: '' });
    setShowCreateForm(false);
  };

  useEffect(() => {
    const savedTopics = localStorage.getItem('forumData');
    setTopics(savedTopics ? JSON.parse(savedTopics) : data);
  }, []);

  useEffect(() => {
    if (showCreateForm) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showCreateForm]);

  const handleClearStorage = () => {
    localStorage.removeItem('forumData');
    setTopics(data);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="top mb-8">
        <div className="sections mb-4">
          <div className="pageName text-2xl font-bold">Forums</div>
        </div>
        {pinnedTopics.length > 0 && (
          <div className="pinned-topics mb-4 grid grid-cols-3 gap-4">
            {pinnedTopics.map(forum => (
              <div key={forum.forumId} className="bg-gray-100 p-4 rounded">
                <div>{forum.forumName}</div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-end mb-4">
          <button onClick={handleCreateTopicClick} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Create Topic
          </button>
          <button onClick={handleClearStorage} className="bg-red-500 text-white px-4 py-2 rounded">
            Clear Local Storage
          </button>
        </div>
      </div>

      <div className="bottom flex">
        <div className="bottom-left w-1/4 pr-4">
          <div className="topics">
            {['All', 'Movies', 'Series', 'Voice Actors', 'Events'].map(tag => (
              <div className="navBut mx-2 mt-2" key={tag}>
                <button onClick={() => setFilter(tag)}>{tag}</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-right w-3/4 pl-4">
          {currentTopics.length > 0 ? (
            <>
              {currentTopics.map(forum => (
                <div key={forum.forumId} className="bg-gray-100 p-4 mb-4 rounded">
                  <div>{forum.forumName}</div>
                </div>
              ))}
              <div className="flex justify-center">
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} className="bg-blue-500 text-white px-4 py-2 rounded mr-2" disabled={currentPage === 1}>
                  Previous
                </button>
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} className="bg-blue-500 text-white px-4 py-2 rounded" disabled={currentPage === totalPages}>
                  Next
                </button>
              </div>
            </>
          ) : (
            <div>No topics available</div>
          )}
        </div>
      </div>

      {showCreateForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-1/2 max-w-lg">
            <h2 className="text-xl font-bold mb-4">Create New Topic</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="forumName">Topic Name</label>
                <input type="text" id="forumName" name="forumName" value={newTopic.forumName} onChange={handleFormChange} className="w-full px-3 py-2 border border-gray-300 rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="description">Description</label>
                <textarea id="description" name="description" value={newTopic.description} onChange={handleFormChange} className="w-full px-3 py-2 border border-gray-300 rounded" rows="4" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="tags">Tags</label>
                <select id="tags" name="tags" multiple value={newTopic.tags} onChange={handleTagsChange} className="w-full px-3 py-2 border border-gray-300 rounded">
                  {['Movies', 'Series', 'Voice Actors', 'Events'].map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
                <button type="button" onClick={() => setShowCreateForm(false)} className="bg-gray-300 text-black px-4 py-2 rounded ml-2">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forum;
