import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/jobs-logo.jpg';

import './styles.css';

const Register = () => (
  <div className='register-container'>
    <div className='content'>
      <section>
        <img src={logoImg} alt='Hyper Jobs' />
        <h1>Register</h1>
        <p>Sign up in order to post jobs and recruit new talents!</p>
        <Link className='back-link' to='/'>
          <FiArrowLeft size={16} color='#E02041' />
          Back to login
        </Link>
      </section>
      <form>
        <input placeholder='Company Name' />
        <input placeholder='Company E-mail' type='email' />

        <input placeholder='Website' />
        <input placeholder='Country' />
        <input placeholder='City' />
        <button className='button' type='submit'>
          Sign up
        </button>
      </form>
    </div>
  </div>
);

export default Register;
