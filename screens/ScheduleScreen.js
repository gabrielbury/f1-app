import { View, SafeAreaView, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import moment from 'moment';

import RacesService from '../services/Races/RacesService'

export default function ScheduleScreen() {

  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    getRaces();
  }, [])

  async function getRaces() {
    try {
      const racesResponse = await RacesService.getRaces();
      setSchedule(racesResponse)
    }
    catch(ex) {
      console.error('ERROR: ', ex.response ?? ex)
    }
    
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView style={{width: '100%'}}>
        <List.Section title="Accordions" style={{width: '100%', height: '100%'}}>
          {schedule.map((race, i) => {
            return (
              <List.Accordion key={i}
                title={`${moment(race.date).utcOffset(-3).format('DD/MM')} ${race.name}`}
                left={props => <List.Icon {...props} icon="flag-checkered" />}>
                <List.Item titleStyle={{fontSize: 12}} title={race.circuit.id.replace('_', ' ').toUpperCase()} />
                <List.Item titleStyle={{fontSize: 12}} title={moment(race.date).utcOffset(-3).format('DD/MM/yyyy HH:mm')} />
              </List.Accordion> )
          })}
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  )
}