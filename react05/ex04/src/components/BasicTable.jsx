import React from 'react';
import './basic-table.css';

const data = [
  { id: 1, name: 'Alice', age: 28, city: 'Seoul' },
  { id: 2, name: 'Bob', age: 34, city: 'Busan' },
  { id: 3, name: 'Carol', age: 22, city: 'Daegu' },
];

export default function BasicTable() {
  return (
    <div className="table-wrapper" role="region" aria-labelledby="table-title">
      <h3 id="table-title">유저 목록</h3>
      <table>
        <caption>회원 기본 정보 테이블</caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">이름</th>
            <th scope="col">나이</th>
            <th scope="col">도시</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.age}</td>
              <td>{r.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
