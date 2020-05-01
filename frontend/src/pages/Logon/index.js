import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import jobBoardImg from '../../assets/job-board.png';
import logoImg from '../../assets/jobs-logo.jpg';

const Logon = () => {
  const [id, setId] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/sessions', { id });
      const companyInfo = {
        companyId: id,
        companyName: res.data.name,
      };
      localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
      history.push('/profile');
    } catch (error) {
      console.log(error);
      alert('Error while trying to login');
    }
  };

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Hyper Jobs' />
        <form onSubmit={handleLogin}>
          <h1>Logon</h1>
          <input
            placeholder='Your ID'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className='button' type='submit'>
            Login
          </button>
          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='#E02041' />
            Sign up
          </Link>
        </form>
      </section>
      <img src={jobBoardImg} alt='' />
    </div>
  );
};

export default Logon;
