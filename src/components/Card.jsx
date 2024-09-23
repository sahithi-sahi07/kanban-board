import React from 'react';

function Card({ ticket, user }) {
  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 4: return '!!!'; // Urgent
      case 3: return '!!';  // High
      case 2: return '!';   // Medium
      case 1: return '⬇️';   // Low
      default: return '◻️';  // No priority
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <img src={user.avatar} alt={user.name} className="user-avatar" />
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-footer">
        <span className="priority-icon">{getPriorityIcon(ticket.priority)}</span>
        <span className="tag">{ticket.tag}</span>
      </div>
    </div>
  );
}

export default Card;