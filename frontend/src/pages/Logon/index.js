import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import jobBoardImg from '../../assets/job-board.png';
import logoImg from '../../assets/jobs-logo.jpg';

const Logon = () => {
  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Hyper Jobs' />
        <form>
          <h1>Logon</h1>
          <input placeholder='Your ID' />
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
