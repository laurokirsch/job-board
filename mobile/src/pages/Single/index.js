import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Single = () => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name='arrow-left' size={28} color='darkblue' />
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
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
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.callToAction}>Apply for this job now</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Single;
