import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';

const Single = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const job = route.params.job;
  const message = `Hello, ${job.name} I would like to apply to the current opening for ${job.title}`;
  const phone = '';

  const navigateBack = () => {
    navigation.goBack();
  };

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: `New application: ${job.title}`,
      recipients: [job.email],
      body: message,
    });
  };

  const sendWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=+${phone}&text=${message}`);
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
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.callToAction}>Apply for this job now</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Single;
