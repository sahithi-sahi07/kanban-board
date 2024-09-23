import React, { useState } from 'react';

function Header({ grouping, ordering, onGroupingChange, onOrderingChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="display-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <i className="fas fa-sliders-h"></i> Display <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'}`}></i>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={ordering} onChange={(e) => onOrderingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;