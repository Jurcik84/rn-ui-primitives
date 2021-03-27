import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Platform,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const base = 16;

const SCREEN_PADDING = 24;
const Container = styled.View`
  padding: ${SCREEN_PADDING}px;
`;

const VStack = styled.View`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 400px;
  justify-content: ${(props) => {
    const {horizontal} = props;
    if (horizontal === 'start') {
      return 'flex-start';
    } else if (horizontal === 'end') {
      return 'flex-end';
    } else if (horizontal === 'between') {
      return 'space-between';
    } else {
      // (horizontal === 'around')
      return 'space-around';
    }
  }};
`;

const HStack = styled.View`
  margin: 8px;
  display: flex;
  flex-direction: row;
  height: ${(props) => {
    return '100%';
  }};
  border: 1px solid red;
  flex-wrap: ${(props) => {
    return props.nowrap ? 'nowrap' : 'wrap';
  }};
  align-items: baseline;
  align-content: flex-start
  justify-content: ${(props) => {
    const {horizontal} = props;
    if (horizontal === 'start') {
      return 'flex-start';
    } else if (horizontal === 'end') {
      return 'flex-end';
    } else if (horizontal === 'between') {
      return 'space-between';
    } else {
      // (horizontal === 'around')
      return 'space-around';
    }
  }};
`;




const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Card = styled.View`
  width: 150px;
  height: 180px;
  border: 1px solid red;
  border-radius: 16px;
`;

const Grid = (props) => {
  const {children = [], columns = 3, heightLikeWidth = false} = props;

  // STATE
  const [gridState, setGridState] = useState();

  // SCREEN WIDTH
  const {width: SCREEN_WIDTH} = Dimensions.get('window');

  // Item width
  const itemWidth = SCREEN_WIDTH / columns;
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
      }}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 0,
          padding: 0,
          flex: 1,
        }}>
        {children &&
          React.Children.map(children, (child, index) => {
            //----------------------------------------------
            const modulo = (index + 1) % columns;
            //----------------------------------------------
            return React.cloneElement(child, {
              //----------------------------------------------
              children: <Text>{modulo}</Text>,
              //----------------------------------------------
              style: {
                //----------------------------------------------
                // backgroundColor: 'red',
                width: itemWidth - 2,
                height: heightLikeWidth
                  ? itemWidth - 2
                  : child.props.style.height,

                //----------------------------------------------
                marginLeft: modulo === 2 ? 0.5 : 1,
                marginRight: modulo === 2 ? 0.5 : 1,

                //----------------------------------------------
                ...(child.props.style || {}),
              },
            });
          })}
      </ScrollView>
    </View>
  );
};

const App = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
    <View
      style={{
        height: 150,
        backgroundColor: 'green',
        marginBottom: 1,
      }}
      key={index}>
      <Text>Hello {item}</Text>
    </View>
  ));
  return (
  
      <Grid
        style={{
          marginTop: 100,
        }}
        heightLikeWidth
        columns={3}>
        {list}
      </Grid>
   
  );
};

export default App;
