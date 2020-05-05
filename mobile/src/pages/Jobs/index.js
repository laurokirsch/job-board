import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import WhiteText from '../../components/WhiteText';

import logoImg from '../../assets/logo.png';

import styles from './styles';

const Jobs = () => {
  const navigation = useNavigation();
  const navigateToSingle = () => {
    navigation.navigate('Single');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logoImg} />
        <Text style={styles.headerTextBold}>327 jobs found</Text>
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>
        This is the mobile version of the job board
      </Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        style={styles.jobsList}
        keyExtractor={(data) => String(data)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.job}>
            <Text style={styles.jobProperty}>Title</Text>
            <Text style={styles.jobValue}>alsjkdf</Text>
            <Text style={styles.jobProperty}>Description</Text>
            <Text style={styles.jobValue}>asfasfs</Text>
            <Text style={styles.jobProperty}>Tags</Text>
            <Text style={styles.jobValue}>fasdfsfas</Text>
            <Text style={styles.jobProperty}>Remote</Text>
            <Text style={styles.jobValue}>asfsafs</Text>
            <Text style={styles.jobProperty}>Location</Text>
            <Text style={styles.jobValue}>asdfasfs</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToSingle}
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
