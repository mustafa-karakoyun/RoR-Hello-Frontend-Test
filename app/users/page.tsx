"use client";
import React, { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
  fetch('http://127.0.0.1:3000/api/v1/users')
      .then(res => {
        if (!res.ok) throw new Error('Kullanıcı bulunamadı');
        return res.json();
      })
      .then(setUsers)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Kullanıcılar</h1>
      <ul data-testid="user-list">
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
