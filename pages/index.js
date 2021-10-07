import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [query, setQuery] = useState('');

  function handlePostSearch(e) {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
  }

  useEffect(() => {
    console.log('__search=', query);
    setPosts();
  });

  return (
    <input
      type='search'
      placeholder='Search Blog Post'
      onChange={handlePostSearch}
    />
  );
}
