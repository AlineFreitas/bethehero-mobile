import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import heroesLogo from '../../assets/logo.png';

import style from './style';

export default function Incident() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  const message = `Hello, ${incident.name}!
  I'm getting in touch to help out on your case "${incident.title}", with an amount of ${ Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL'})
  .format(incident.value)}.`;

  function navigateBack(){
    navigation.goBack();
  }

  function sendEmail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp_number}&text=${message}`)
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
        <Text style={[style.incidentLabel, { marginTop: 0 }]}>NGO</Text>
        <Text style={style.incidentValue}>{incident.name} from {incident.city}/{incident.UF}</Text>
        <Text style={style.incidentLabel}>Title</Text>
        <Text style={style.incidentValue}> {incident.title} </Text>
        <Text style={style.incidentLabel}>More details</Text>
        <Text style={style.incidentValue}>{incident.description}</Text>
        <Text style={style.incidentLabel}>Value</Text>
        <Text style={style.incidentValue}>
          { Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(incident.value)}
        </Text>
      </View>

      <View style={style.contactBox}>
        <Text style={style.heroTitle}>Save the day!</Text>
        <Text style={style.heroTitle}>Be the hero on this incident.</Text>
        <Text style={style.contactText}>Get in Touch</Text>

        <View style={style.contacts}>
          <TouchableOpacity style={style.contact} onPress={sendEmail}>
            <Text style={style.actionText}>E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.contact} onPress={sendWhatsapp}>
            <Text style={style.actionText}>Whatsapp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}