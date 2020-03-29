import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text } from 'react-native';

import heroesLogo from '../../assets/logo.png';

import style from './style'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

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

      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={ incident => String(incident)}
        showsVerticalScrollIndicator={false}
        style={style.incidentsList}
        renderItem={ () => (
          <View style={style.incident}>
            <Text style={style.incidentLabel}>Incident</Text>
            <Text style={style.incidentValue}>Amora</Text>
            <Text style={style.incidentLabel}>Description</Text>
            <Text style={style.incidentValue}>Something something, with Amora.</Text>
            <Text style={style.incidentLabel}>Value</Text>
            <Text style={style.incidentValue}>R$500,00</Text>

            <TouchableOpacity
              style={style.showIncidentButton}
              onPress={ () => {}} >
                <Text style={style.showIncidentButtonText}>See Details</Text>
                <Feather name="arrow-right" size={17} color="#e02041"/>
            </TouchableOpacity>
          </View>
        )}
      >

      </FlatList>
    </View>
  );
}