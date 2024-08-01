// CreateTopicModal.js
import React, { useRef, useEffect } from 'react';

const CreateTopicModal = ({ showCreateForm, setShowCreateForm, newTopic, handleFormChange, handleTagsChange, handleFormSubmit }) => {
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
  }, [showCreateForm, setShowCreateForm]);

  return (
    showCreateForm && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div ref={modalRef} className="bg-white p-8 rounded shadow-lg w-1/2 max-w-lg">
          <h2 className="text-xl font-bold mb-4">Create New Topic</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="forumName">Topic Name</label>
              <input
                type="text"
                id="forumName"
                name="forumName"
                value={newTopic.forumName}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="description">Description</label>
              <textarea id="description" name="description" value={newTopic.description} onChange={handleFormChange} className="w-full px-3 py-2 border border-gray-300 rounded" rows="4" required/>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="tags">Tags</label>
              <select id="tags" name="tags" multiple value={newTopic.tags}  onChange={handleTagsChange} className="w-full px-3 py-2 border border-gray-300 rounded" required>
                {['Movies', 'Series', 'Voice Actors', 'Events'].map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2">Create</button>
              <button type="button" onClick={() => setShowCreateForm(false)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default CreateTopicModal;
