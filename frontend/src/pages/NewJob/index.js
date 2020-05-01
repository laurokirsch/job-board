import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/jobs-logo.jpg';

const NewJob = () => {
  return (
    <div className='new-job-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Hyper Jobs' />
          <h1>Post a new job</h1>
          <p>And get ready to find a skilled professional to work with!</p>
          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#E02041' />
            Back to Home
          </Link>
        </section>
        <form>
          <input placeholder='Job Title' />
          <textarea placeholder='Job Description' />
          <select name='remote-job'>
            <option>Remote?</option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
          <input placeholder='Tags - Separated by commas' />
          <button className='button' type='submit'>
            Post job
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewJob;
