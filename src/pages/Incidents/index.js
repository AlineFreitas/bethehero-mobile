import React from 'react';
import { View, Image, Text } from 'react-native';

import heroesLogo from '../../assets/logo.png';

import style from './style'

export default function Incidents() {
  return(
    <View style={style.container}>
      <View style={style.header}>
        <Image source={heroesLogo}/>
        <Text style={style.headerText}>
          Total: <Text style={style.headerTextBold}>0 Incidents</Text>
        </Text>
      </View>
      <View>
        <Text style={style.title}>Welcome!</Text>
        <Text style={style.description}>
          Choose one of the incidents below and save the day!
        </Text>
      </View>
    </View>
  );
}