import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const Dropdown = forwardRef(({ onStatusChange }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Add to List');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleStatusChange = (status) => {
    const statusColor = getStatusColor(status).split(' ')[0]; 
    setSelectedStatus(status);
    setIsOpen(false);
    onStatusChange(status, statusColor); 
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    resetStatus() {
      setSelectedStatus('Add to List');
    },
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case 'Watching':
        return 'bg-green-500 hover:bg-green-600';
      case 'Completed':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'On-hold':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Dropped':
        return 'bg-red-500 hover:bg-red-600';
      case 'Plan to Watch':
        return 'bg-gray-500 hover:bg-gray-600';
      default:
        return 'bg-purple-500 hover:bg-purple-600';
    }
  };

  const statusOptions = ['Watching', 'Completed', 'On-hold', 'Dropped', 'Plan to Watch'];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${getStatusColor(selectedStatus)}`}
        type="button"
        style={{ width: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        <span className="flex-grow text-left font-semibold">{selectedStatus}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 z-10 w-44 max-w-full">
          <div className="py-2 text-sm text-center text-gray-700 rounded">
            {statusOptions.map((status) => (
              <div key={status}>
                <a
                  onClick={() => handleStatusChange(status)}
                  className={`block px-4 py-2 cursor-pointer no-underline rounded text-white ${getStatusColor(status)}`}
                >
                  {status}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default Dropdown;
