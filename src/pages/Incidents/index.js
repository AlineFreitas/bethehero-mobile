import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import api from '../../services/api'

import heroesLogo from '../../assets/logo.png';
import style from './style'

export default function Incidents() {
  const [incidents, setIncidents] = useState([]); 
  const [totalIncidents, setTotalIncidents] = useState(0); 
  const navigation = useNavigation();

  function navigateToShowIncident(incident) {
    navigation.navigate('Incident', { incident });
  }

  async function loadIncidents(){
    const response = await api.get('/incidents');
    setIncidents(response.data);
    setTotalIncidents(response.headers['x-total-count']);
  }

  useEffect(() => { loadIncidents() },
  []);

  return(
    <View style={style.container}>
      <View style={style.header}>
        <Image source={heroesLogo}/>
        <Text style={style.headerText}>
          Total: 
          <Text style={style.headerTextBold}>
            {totalIncidents} Incidents
          </Text>
        </Text>
      </View>
      <View>
        <Text style={style.title}>Welcome!</Text>
        <Text style={style.description}>
          Choose one of the incidents below and save the day!
        </Text>
      </View>

      <FlatList
        data={incidents}
        keyExtractor={ incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        style={style.incidentsList}
        renderItem={ ( { item: incident }) => (
          <View style={style.incident}>
            <Text style={style.incidentLabel}>ONG</Text>
            <Text style={style.incidentValue}>{incident.name}</Text>
            <Text style={style.incidentLabel}>Title</Text>
            <Text style={style.incidentValue}>{incident.title}</Text>
            <Text style={style.incidentLabel}>Value</Text>
            <Text style={style.incidentValue}>
              { Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={style.showIncidentButton}
              onPress={ () => navigateToShowIncident(incident)} >
                <Text style={style.showIncidentButtonText}>See Details</Text>
                <Feather name="arrow-right" size={17} color="#e02041"/>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}