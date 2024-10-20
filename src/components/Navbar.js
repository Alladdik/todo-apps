import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUsername(JSON.parse(storedUser).username); // Отримуємо ім'я користувача
    }
  }, []);

  return (
    <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/todos">Todo List</Link></li>
      </ul>
      <div className="auth-status">
        {isLoggedIn ? (
          <span>Ви увійшли як: {username}</span>
        ) : (
          <Link to="/">Увійдіть в аккаунт</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
