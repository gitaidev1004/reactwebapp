// src/components/ServerFilterList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

export default function ServerFilterList() {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async (query) => {
    const res = await axios.get(`https://dummyjson.com/users/search?q=${query}`);
    setData(res.data.users);
  };

  const debouncedFetch = debounce(fetchData, 500);

  useEffect(() => {
    if (filter) debouncedFetch(filter);
  }, [filter]);

  return (
    <div>
      <h2>Server Filter List</h2>
      <input
        placeholder="검색..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ul className="list">
        {data.map(user => (
          <li key={user.id} className="list-item">{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}
