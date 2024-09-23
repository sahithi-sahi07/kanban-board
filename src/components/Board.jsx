import React, { useMemo } from 'react';
import Column from './Column';

function Board({ tickets, users, grouping, ordering }) {
  const groupedAndSortedTickets = useMemo(() => {
    const grouped = {};

    // Grouping
    if (grouping === 'status') {
      tickets.forEach(ticket => {
        if (!grouped[ticket.status]) grouped[ticket.status] = [];
        grouped[ticket.status].push(ticket);
      });
    } else if (grouping === 'user') {
      users.forEach(user => {
        grouped[user.name] = tickets.filter(ticket => ticket.userId === user.id);
      });
    } else if (grouping === 'priority') {
      const priorities = {
        4: 'Urgent',
        3: 'High',
        2: 'Medium',
        1: 'Low',
        0: 'No priority'
      };
      Object.keys(priorities).forEach(priority => {
        grouped[priorities[priority]] = tickets.filter(ticket => ticket.priority.toString() === priority);
      });
    }

    // Sorting
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (ordering === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return grouped;
  }, [tickets, users, grouping, ordering]);

  return (
    <div className="board">
      {Object.entries(groupedAndSortedTickets).map(([columnTitle, columnTickets]) => (
        <Column key={columnTitle} title={columnTitle} tickets={columnTickets} users={users} />
      ))}
    </div>
  );
}

export default Board;