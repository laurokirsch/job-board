import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/jobs-logo.jpg';
import './styles.css';

const Profile = () => {
  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='Hyper Jobs' />
        <span>Welcome, Company</span>
        <Link to='job/new' className='button' to='job/new'>
          Post new job
        </Link>
        <button type='button'>
          <FiPower size={18} color='#e02041' />
        </button>
      </header>
      <h1>Latest jobs</h1>
      <ul>
        <li>
          <strong>Job title</strong>
          <p>Remote or not</p>
          <strong>Description:</strong>
          <p>Description test</p>
          <strong>E-mail</strong>
          <p>E-mail test</p>
          <button type='button'>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
        <li>
          <strong>Job title</strong>
          <p>Remote or not</p>
          <strong>Description:</strong>
          <p>Description test</p>
          <strong>E-mail</strong>
          <p>E-mail test</p>
          <button type='button'>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
        <li>
          <strong>Job title</strong>
          <p>Remote or not</p>
          <strong>Description:</strong>
          <p>Description test</p>
          <strong>E-mail</strong>
          <p>E-mail test</p>
          <button type='button'>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
        <li>
          <strong>Job title</strong>
          <p>Remote or not</p>
          <strong>Description:</strong>
          <p>Description test</p>
          <strong>E-mail</strong>
          <p>E-mail test</p>
          <button type='button'>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
