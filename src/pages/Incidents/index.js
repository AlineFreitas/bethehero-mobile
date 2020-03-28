import React from 'react';
import { View } from 'react-native';

export default function Incidents() {
  return(
    <View style={style.container}>
      <View style={style.header}>
        <Image source={}/>
        <Text style={style.headerText}>
          Total: <Text style={style.headerTextBold}>0 Incidents</Text>
        </Text>
      </View>
      <View>
        <Text style={style.title}></Text>
        <Text style={style.description}></Text>
      </View>
    </View>
  );
}