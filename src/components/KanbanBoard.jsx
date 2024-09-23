import React, { useState, useEffect } from 'react';
import Header from './Header';
import Board from './Board';
import { fetchData } from '../api';

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  return (
    <div className="kanban-board">
      <Header
        grouping={grouping}
        ordering={ordering}
        onGroupingChange={setGrouping}
        onOrderingChange={setOrdering}
      />
      <Board
        tickets={tickets}
        users={users}
        grouping={grouping}
        ordering={ordering}
      />
    </div>
  );
}

export default KanbanBoard;