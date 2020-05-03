import React from 'react';
import { View, Image, Text } from 'react-native';
import WhiteText from '../../components/WhiteText';

import logoImg from '../../assets/logo.png';

import styles from './styles';

const Jobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logoImg} />
        <WhiteText style={styles.headerTextBold}>327 jobs found</WhiteText>
      </View>
      <WhiteText style={styles.title}>Welcome!</WhiteText>
      <WhiteText style={styles.description}>
        This is the mobile version of the job board
      </WhiteText>
    </View>
  );
};

export default Jobs;
