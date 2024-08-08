import React, { useState, useEffect, useRef } from 'react';
import data from '../assets/forumData.json';
import TopicList from '../functions/forumPage/topicList.js';
import PinnedTopics from '../functions/forumPage/pinnedTopics.js';
import CreateTopic from '../functions/forumPage/createForumTopic.js';

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

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handleClearStorage = () => {
    localStorage.removeItem('forumData');
    setTopics(data);
    setCurrentPage(1);
  };

  const getFormattedDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleTagClick = (tag) => {
    setFilter(tag);
    setCurrentPage(1);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowCreateForm(false);
      }
    };

    if (showCreateForm) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCreateForm]);

  return (
    <div className="container mx-auto p-4 font-IndieFlower">
      <div className="top mb-8">
        <div className="sections mb-4">
          <div className="pageName text-2xl font-bold">Forums</div>
        </div>

        <PinnedTopics
          pinnedTopics={pinnedTopics}
          getFormattedDate={getFormattedDate}
          handleCreateTopicClick={handleCreateTopicClick}
          handleClearStorage={handleClearStorage}
        />

        <div className="flex justify-end mb-4">
          <button onClick={handleCreateTopicClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2">
            Create Topic
          </button>
          <button onClick={handleClearStorage} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Clear Local Storage
          </button>
        </div>
      </div>

      <div className="bottom flex text-lg">
      <div className="bottom-left w-1/4 pr-4">
        <div className="topics">
          {['All', 'Movies', 'Series', 'Voice Actors', 'Events'].map(tag => (
            <div className="navBut mx-2 mt-2" key={tag}>
              <button
                onClick={() => handleTagClick(tag)}
                className={`relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] ${filter === tag ? 'before:w-[50%] after:w-[50%]' : ''}`}
              >
                {tag}
              </button>
            </div>
          ))}
        </div>
      </div>


        <TopicList
          topics={currentTopics}
          getFormattedDate={getFormattedDate}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          handleTagClick={handleTagClick}
        />
      </div>

      <CreateTopic
        showCreateForm={showCreateForm}
        setShowCreateForm={setShowCreateForm}
        newTopic={newTopic}
        handleFormChange={handleFormChange}
        handleTagsChange={handleTagsChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default Forum;
