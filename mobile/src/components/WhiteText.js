import React from 'react';
import { Text } from 'react-native';

export default function WhiteText(props) {
  return (
    <Text style={{ ...props.style, color: '#fff' }}>{props.children}</Text>
  );
}
