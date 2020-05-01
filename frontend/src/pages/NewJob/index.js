import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/jobs-logo.jpg';

const NewJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [remote, setRemote] = useState('');
  const [tags, setTags] = useState('');
  const history = useHistory();

  const { companyId } = JSON.parse(localStorage.getItem('companyInfo'));

  const handleNewJob = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      tags,
      remote,
    };

    console.log(data);

    try {
      await api.post('job', data, {
        headers: {
          Authorization: companyId,
        },
      });
      history.push('/profile');
    } catch (error) {
      alert('Error while creating job');
    }
  };
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
        <form onSubmit={handleNewJob}>
          <input
            placeholder='Job Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Job Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder='Tags - Separated by commas'
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <select
            name='remote'
            onChange={(e) => setRemote(e.target.value)}
            value={remote}
          >
            <option>Remote?</option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
          <button className='button' type='submit'>
            Post job
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewJob;
