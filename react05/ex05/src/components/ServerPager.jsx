// src/components/ServerPager.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

export default function ServerPager({ pageSize }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users?limit=${pageSize}&skip=${(page-1)*pageSize}`)
      .then(res => {
        setData(res.data.users);
        setTotal(res.data.total);
      });
  }, [page]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div>
      <h2>Server Pager</h2>
      <ul className="list">
        {data.map(u => <li key={u.id} className="list-item">{u.firstName} {u.lastName}</li>)}
      </ul>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}
