import React, { useState, useEffect, useRef } from 'react';

const Comment = () => {
  const [isReplyVisible, setIsReplyVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const commentRef = useRef(null);

  const handleTextAreaChange = (event) => {
    setIsTyping(event.target.value.trim().length > 0);
  };

  const toggleReplyVisibility = () => {
    setIsReplyVisible(!isReplyVisible);
  };

  const handleClickOutside = (event) => {
    if (commentRef.current && !commentRef.current.contains(event.target)) {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={commentRef} className="w-full bg-gradient-to-br from-sky-200 to-sky-300 rounded-lg border border-gray-300 p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>

        <div className="w-full px-3 my-2">
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Comment"
            required
            onChange={handleTextAreaChange}
          ></textarea>
        </div>

        <div className={`w-full flex justify-center ${isTyping ? 'block' : 'hidden'}`}>
          <input
            type="submit"
            className="px-4 py-2 rounded-md text-white text-sm bg-indigo-500 hover:bg-indigo-600 transition duration-150 ease-in-out"
            value="Post Comment"
          />
        </div>

        <div className="flex flex-col mt-4 pl-4">
          <div className="border rounded-md p-4 mb-4 bg-slate-100">
            <div className="flex gap-3 items-center mb-2">
              <img
                src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg"
                className="object-cover w-12 h-12 rounded border-2 shadow-sm"
                alt="User"
              />
              <h3 className="text-base font-semibold">User name</h3>
            </div>
            <p className="text-gray-600 text-sm pl-2 mb-2">This is a sample comment.</p>

            <div className="flex justify-start text-sm text-gray-500 gap-4 pl-2">
                <button 
                type="button" 
                className="hover:underline"
                onClick={toggleReplyVisibility}
                >
                Reply
                </button>
                <button 
                type="button" 
                className="hover:underline"
                >
                Report
                </button>
            </div>

            {isReplyVisible && (
              <div className="mt-4 pl-4 border-l-2 border-gray-300 bg-slate-100">
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-16 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  placeholder="Type Your Reply"
                ></textarea>
                <div className="w-full flex justify-end mt-2">
                  <input
                    type="submit"
                    className="px-4 py-2 rounded-md text-white text-sm bg-indigo-500 hover:bg-indigo-600 transition duration-150 ease-in-out"
                    value="Post Reply"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Comment;
