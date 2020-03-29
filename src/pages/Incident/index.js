import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import heroesLogo from '../../assets/logo.png';

import style from './style';

export default function Incident() {
  const navigation = useNavigation();

  function navigateBack(){
    navigation.goBack();
  }

  return(
    <View style={style.container}>
      <View style={style.header}>
        <Image source={heroesLogo}/>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041"/>
        </TouchableOpacity>
      </View>

      <View style={style.incident}>
        <Text style={[style.incidentLabel, { marginTop: 0 }]}>Incident</Text>
        <Text style={style.incidentValue}>Amora</Text>
        <Text style={style.incidentLabel}>Description</Text>
        <Text style={style.incidentValue}>Something something, with Amora.</Text>
        <Text style={style.incidentLabel}>Value</Text>
         <Text style={style.incidentValue}>R$500,00</Text>
      </View>

      <View style={style.contactBox}>
        <Text style={style.heroTitle}>Save the day!</Text>
        <Text style={style.heroTitle}>Be the hero on this incident.</Text>
        <Text style={style.contactText}>Get in Touch</Text>

        <View style={style.contacts}>
          <TouchableOpacity style={style.contact} onPress={() => {}}>
            <Text style={style.actionText}> E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.contact} onPress={() => {}}>
            <Text style={style.actionText}> Whatsapp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}