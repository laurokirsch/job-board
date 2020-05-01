import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/jobs-logo.jpg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      country,
      city,
      website,
    };

    try {
      const res = await api.post('company', data);
      alert(`Your access ID: ${res.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Error while registering. Please try again');
    }
  };

  return (
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
        <form onSubmit={handleRegister}>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder='Company Name'
            value={name}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Company E-mail'
            type='email'
            value={email}
          />
          <input
            onChange={(e) => setCountry(e.target.value)}
            placeholder='Country'
            value={country}
          />
          <input
            onChange={(e) => setCity(e.target.value)}
            placeholder='City'
            value={city}
          />
          <input
            onChange={(e) => setWebsite(e.target.value)}
            placeholder='Website'
            value={website}
          />
          <button className='button' type='submit'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
