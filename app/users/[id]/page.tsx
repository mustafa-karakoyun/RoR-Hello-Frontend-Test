"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function UserDetailPage() {
  const router = useRouter();
  const id = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : undefined;
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
  fetch(`http://127.0.0.1:3000/api/v1/users/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Kullanıcı bulunamadı');
        return res.json();
      })
      .then(setUser)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Yükleniyor...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
