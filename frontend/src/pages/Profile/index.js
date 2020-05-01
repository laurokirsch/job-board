import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/jobs-logo.jpg';
import './styles.css';

const Profile = () => {
  const [jobs, setJobs] = useState([]);
  const storedCompany = JSON.parse(localStorage.getItem('companyInfo'));

  const { companyName, companyId } = storedCompany;

  const history = useHistory();

  useEffect(() => {
    (async function getJobs() {
      const res = await api.get('company/jobs', {
        headers: {
          Authorization: companyId,
        },
      });
      setJobs(res.data);
    })();
  }, [companyId]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`job/${id}`, {
        headers: {
          Authorization: companyId,
        },
      });
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (error) {
      alert('Error while trying to delete job');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  const showLoading = () => <h2>Loading jobs...</h2>;

  const showJobs = () => (
    <ul>
      {jobs.map((job) => {
        const { id, title, description, tags, remote, country, city } = job;
        return (
          <li key={id}>
            <strong>Title</strong>
            <p>{title}</p>
            <strong>Description:</strong>
            <p>{description}</p>
            <strong>Tags</strong>
            <p>{tags}</p>
            <strong>Remote</strong>
            <p>{remote ? 'Yes' : 'No'}</p>
            <strong>Location</strong>
            <p>
              {country} - {city}
            </p>
            <button type='button' onClick={() => handleDelete(id)}>
              <FiTrash2 size={20} color='#a8a8b3' />
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='Hyper Jobs' />
        <span>Welcome, {companyName}</span>
        <Link to='job/new' className='button'>
          Post new job
        </Link>
        <button type='button' onClick={handleLogout}>
          <FiPower size={18} color='#e02041' />
        </button>
      </header>
      <h1>Latest jobs</h1>
      {jobs.length ? showJobs() : showLoading()}
    </div>
  );
};

export default Profile;
