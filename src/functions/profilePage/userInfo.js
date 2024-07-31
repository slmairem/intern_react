import React from 'react';

const UserInfo = ({ user, text, editMode, textareaRef, handleChange, handleSave, handleEdit }) => {
    return (
      <div>
        {/* User Info Section */}
        <div className='mb-4 bg-gradient-to-br from-sky-500 to-sky-300 rounded p-3'>
            <div className="mb-2">
                <span className='font-semibold'>Pronouns:</span> {user.pronouns}
            </div>
            <div className="mb-2">
                <span className='font-semibold'>Last Online:</span> {user.lastOnline}
            </div>
            <div className="mb-2">
                <span className='font-semibold'>Joined:</span> {user.joined}
            </div>
        </div>
  
        {/* Editable Text Section */}
        <div className='p-4 rounded bg-gradient-to-br from-sky-500 to-sky-300 mb-4'>
          <div className="flex justify-between items-start">
            <div className="flex-grow max-h-64 overflow-auto text-lg">
              {editMode ? (
                <textarea
                  ref={textareaRef}
                  value={text}
                  onChange={handleChange}
                  rows="1"
                  className="w-full bg-sky-300 rounded p-2 text-lg resize-none overflow-hidden"
                  style={{ overflowX: 'hidden' }}
                />
              ) : (
                <p className='max-h-64 break-words'>{text}</p>
              )}
            </div>
            <button
              className="bg-sky-900 text-slate-200 text-sm px-2 py-1 my-auto rounded ml-2"
              onClick={editMode ? handleSave : handleEdit}
            >
              {editMode ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default UserInfo;
