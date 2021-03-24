import React, {useState, useEffect} from 'react';
import {View, Button, Platform, Text, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {SafeAreaView} from 'react-native-safe-area-context';
import moment from 'moment';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 24px;
  flex-direction: column;
`;

const VStack = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const HStack = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Divider = styled.View`
  height: 40px;
`;

const Title = styled.Text`
  text-align: left;
  font-size: 22px;
`;

const App = () => {
  // modes and set mode
  const [timeMode, setTimeMode] = useState('inline');
  const [time, setDate] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
  const [time2, setTime2] = useState(new Date());
  const [mode, setMode] = useState('date');
  const onChange = (event, value) => {
    setTime2(value || new Date());
  };

  const setDifferentModes = (mode: string) => {
    if (mode === 'calendar') {
      setTimeMode(mode);
    } else if (mode === 'clock') {
      setTimeMode(mode);
    } else {
      setTimeMode(mode);
    }
  };

  useEffect(() => {
    let id = setInterval(() => {
      setDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            marginBottom: 20,
          }}>
          Example Date Picker
        </Text>
        <VStack>
          <Button
            title="spinner"
            onPress={() => setDifferentModes('spinner')}
          />
          <Button
            title="compact"
            onPress={() => setDifferentModes('compact')}
          />
          <Button title="inline" onPress={() => setDifferentModes('inline')} />
        </VStack>
        <Divider />
        <HStack>
          <Title> Time : {time}</Title>

          <Divider />
          <DateTimePicker
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date(2300, 10, 20)}
            testID="dateTimePicker1"
            value={time2}
            mode={mode}
            is24Hour={true}
            display={timeMode}
            onChange={onChange}
          />
        </HStack>
        <Divider />
        <Divider />
      </Container>
    </SafeAreaView>
  );
};

export default App;
