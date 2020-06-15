import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const navigateToSingle = (job) => {
    navigation.navigate('Single', { job });
  };

  async function loadJobs() {
    if (loading) return;
    if (totalJobs > 0 && jobs.length === totalJobs) return;

    setLoading(true);
    try {
      const response = await api.get('api/job', { params: { page } });
      setJobs([...jobs, ...response.data.jobs]);
      setTotalJobs(response.headers['x-total-count']);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logoImg} />
        <Text style={styles.headerTextBold}>{totalJobs} jobs found</Text>
      </View>
      <Text style={styles.title}>Welcome to Web Scraped Jobs!</Text>
      <Text style={styles.description}>
        The most recent opportunities are listed below
      </Text>
      <FlatList
        data={jobs}
        style={styles.jobsList}
        keyExtractor={(job) => String(job.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadJobs}
        onEndReachedThreshold={0.2}
        renderItem={({ item: job }) => (
          <View style={styles.job}>
            <Text style={styles.jobProperty}>Title</Text>
            <Text style={styles.jobValue}>{job.title}</Text>
            <Text style={styles.jobProperty}>Description</Text>
            <Text style={styles.jobValue}>{job.description}</Text>
            <Text style={styles.jobProperty}>Tags</Text>
            <Text style={styles.jobValue}>{job.tags}</Text>
            <Text style={styles.jobProperty}>Remote</Text>
            <Text style={styles.jobValue}>{job.remote}</Text>
            <Text style={styles.jobProperty}>Location</Text>
            <Text style={styles.jobValue}>
              {job.country} - {job.city}
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToSingle(job)}
            >
              <Text style={styles.detailsButtonText}>More details</Text>
              <Feather name='arrow-right' size={16} color='darkblue' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Jobs;
