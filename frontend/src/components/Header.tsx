import React, { useState, useEffect } from 'react';
//import { useAuth } from '../services/AuthContext';
//import {api} from '../services/axiosInstance';
const Header: React.FC = () => {
  //const {user, login, logout} = useAuth();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  //const [showLogin, setShowLogin] = useState(false);
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await api.post('/login', { username, password }); // Send login request
  //     login(response.data.token); // Save token in AuthContext
  //     console.log(response);
  //     setShowLogin(false);
  //   } catch (error) {
  //     console.log(error);
  //     alert('Login failed!');

  //   }
  // };

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a href="#about" className="scroll-smooth">About</a></li>
            <li><a href="#projects" className="scroll-smooth">Projects</a></li>
            <li><a href="#skills" className="scroll-smooth">Skills</a></li>
          </ul>
        </div>
        <a href="#hero" className="btn btn-ghost text-xl">Maximus Bicalan</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#about" className="scroll-smooth">About</a></li>
          <li><a href="#projects" className="scroll-smooth">Projects</a></li>
          <li><a href="#skills" className="scroll-smooth">Skills</a></li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        {/* {!user ? (
          <>
            <button className="btn btn-primary" onClick={() => setShowLogin(!showLogin)}>Login</button>
            {showLogin && (
              <form onSubmit={handleLogin} className="absolute bg-white p-4 rounded shadow-lg top-16 right-4">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="input input-bordered mb-2 w-full" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input input-bordered mb-2 w-full" />
                <button type="submit" className="btn btn-primary w-full">Login</button>
              </form>
            )}
          </>
        ) : (
          <>
            <span className="text-sm">Hello, {user.username}</span>
            <button className="btn btn-error" onClick={logout}>Logout</button>
          </>
        )} */}
        <button className="btn btn-ghost" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
