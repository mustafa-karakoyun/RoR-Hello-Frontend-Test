"use client";
import React, { useState } from 'react';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    if (!title) {
      setMessage('Başlık boş olamaz');
      return;
    }
  const res = await fetch('http://127.0.0.1:3000/api/v1/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, user_id: userId, category_id: categoryId })
    });
    if (res.status === 201) {
      setMessage('Gönderi başarıyla oluşturuldu');
      setTitle(''); setContent(''); setUserId(''); setCategoryId('');
    } else if (res.status === 422) {
      setMessage('Başlık boş olamaz');
    } else {
      setMessage('Bir hata oluştu');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Yeni Gönderi Oluştur</h1>
      <input data-testid="post-title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Başlık" />
      <textarea data-testid="post-content" value={content} onChange={e => setContent(e.target.value)} placeholder="İçerik" />
      <input data-testid="post-user-id" value={userId} onChange={e => setUserId(e.target.value)} placeholder="Kullanıcı ID" />
      <input data-testid="post-category-id" value={categoryId} onChange={e => setCategoryId(e.target.value)} placeholder="Kategori ID" />
      <button data-testid="submit-post" type="submit">Gönder</button>
      {message && <div>{message}</div>}
    </form>
  );
}
