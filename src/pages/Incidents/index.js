import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';

import api from '../../services/api'

import heroesLogo from '../../assets/logo.png';

import style from './style'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]); 
  const navigation = useNavigation();

  function navigateToShowIncident() {
    navigation.navigate('Incident');
  }

  async function loadIncidents(){
    const response = await api.get('/incidents');
    setIncidents(response.data);
  }

  useEffect(() => {},
  []);

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
            <Text style={style.incidentValue}>{incident.value}</Text>

            <TouchableOpacity
              style={style.showIncidentButton}
              onPress={ navigateToShowIncident} >
                <Text style={style.showIncidentButtonText}>See Details</Text>
                <Feather name="arrow-right" size={17} color="#e02041"/>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}