import React, {FunctionComponent, ComponentProps} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

import {HStack, VStack} from './layouts';

const {width} = Dimensions.get('screen');

export const ProgressBarVerticalWithCircles: FunctionComponent<
  ComponentProps<typeof View>
> = (props) => {
    const {} = props
  const progress = [
    {
      status: 'finished',
    },
    {
      status: 'finished',
    },
    {
      status: 'finished',
    },
    {
      status: 'not-finished',
    },
    {
      status: 'not-finished',
    },
  ];
  const verticalIndicators = Array.from(
    Array(progress.length - 1),
    (_, index) => index + 1,
  );
  return (
    <VStack marginTop={50} marginBottom={50} flex={1}>
      {progress.map(({status}, index) => {
        return (
          <>
            <View
              key={index}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                left: Math.floor((index * width) / 5),
                width: 30,
                height: 30,

                borderRadius: 15,
                backgroundColor: status === 'finished' ? '#FF004F' : '#FEC7D8',
              }}>
              {status === 'finished' ? (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: 'white',
                  }}></View>
              ) : null}
            </View>
          </>
        );
      })}
      {progress.map(({status}, index, self) => {
        return self.length - 1 !== index ? (
          <View
            key={index}
            style={{
              zIndex: -1,
              top: 14,
              position: 'absolute',
              left: Math.floor((index * width) / 5),
              width: Math.floor(width / 5),
              height: 2,
              backgroundColor: status === 'finished' ? '#FF004F' : '#FEC7D8',
            }}></View>
        ) : null;
      })}
    </VStack>
  );
};

export const ProgressBarHorizontalList: FunctionComponent<
  ComponentProps<typeof View>
> = () => {
  const progress = [
    { 
      msg: 'Hello there',
      status: 'finished',
    },
    {
        msg: 'Hello there',
      status: 'finished',
    },
    {
        msg: 'Hello there',
      status: 'finished',
    },
    {
        msg: 'Hello there',
      status: 'finished',
    },
    {
        msg: 'Hello there',
      status: 'not-finished',
    },
  ];
  //   const verticalIndicators = Array.from(
  //     Array(progress.length - 1),
  //     (_, index) => index + 1,
  //   );
  return (
    <VStack marginTop={50} marginBottom={50} flex={1}>
      {progress.map(({status, msg=""}, index, self) => {
        const VerticalProgressItem = (
          <View
            style={{
              height: 82,
              width: 2,
              //   borderWidth: 1,
              position: 'absolute',
              top: index,
              left: 9,
              backgroundColor: status === 'finished' ? '#FF004F' : '#FEC7D8',
            }}></View>
        );
        const circleProgressIndicator = (
          <View
            style={{
              marginRight: 24,
              width: 21,
              height: 21,
              //   borderWidth: 1,
              borderRadius: 20,
              backgroundColor: status === 'finished' ? '#FF004F' : '#FEC7D8',
            }}></View>
        );
        return (
          <HStack 
         
          paddingRight={16} height={66} >
            {circleProgressIndicator}
            <VStack>
              <Text
                style={{
                  fontSize: 18,
                }}>
                {msg}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                }}>
                {status}
              </Text>
             
            </VStack>
            {self.length - 1 !== index ? VerticalProgressItem : null}
          </HStack>
        );
      })}
    </VStack>
  );
};
