import React from 'react';
import Card from './Card';

function Column({ title, tickets, users }) {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <span className="ticket-count">{tickets.length}</span>
      </div>
      <div className="column-body">
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} user={users.find(user => user.id === ticket.userId)} />
        ))}
      </div>
    </div>
  );
}

export default Column;