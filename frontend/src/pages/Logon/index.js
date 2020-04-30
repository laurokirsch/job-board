import React from 'react';
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
          <h1>Faça seu logon</h1>
          <input type='text' placeholder='Sua ID' />
          <button className='button' type='submit'>
            Entrar
          </button>
          <a href='/register'>
            <FiLogIn size={16} color='#E02041' />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={jobBoardImg} alt='' />
    </div>
  );
};

export default Logon;
