import React, {useState, useEffect, useRef, useMemo} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

export function GridHelper({
  columns = 12,
  bgcolor = '#ddd',
  columnBgColor = 'red',
  opacity = 0.3,
  horizontal = true,
}) {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useRef(
    Dimensions.get('window'),
  ).current;
  const columnsNumber = columns;
  const columnWidth = SCREEN_WIDTH / columns;

  const viewGrid = useRef(
    Array.from(Array(columnsNumber), (_, index) => index).map((_, index) => (
      <View
        key={index}
        style={{
          width: columnWidth,
          height: SCREEN_HEIGHT,
          backgroundColor: columnBgColor,
          position: 'absolute',
          left: columnWidth * index,
          borderRightWidth: 1,
          borderColor: 'black',
        }}>
        <Text
          style={{
            top: 100,
          }}>
          {columnWidth}
        </Text>
      </View>
    )),
  ).current;

  const viewHorizontal = useRef(
    Array.from(
      Array(Math.floor(SCREEN_HEIGHT / columnWidth)),
      (_, index) => index,
    ).map((_, index) => (
      <View
        key={index}
        style={{
          width: SCREEN_WIDTH,
          height: columnWidth,
          backgroundColor: columnBgColor,
          position: 'absolute',
          top: columnWidth * index,
          borderBottomWidth: 1,
          borderColor: 'black',
        }}>
        <Text
          style={{
            top: 100,
          }}>
          {/* {index + 1} */}
        </Text>
      </View>
    )),
  ).current;
  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: opacity,
      }}>
      {horizontal ? viewGrid : viewHorizontal}
    </View>
  );
}

export function UtilImageAppDisplay() {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useRef(
    Dimensions.get('window'),
  ).current;
  return (
    <Image
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        opacity: 0.3,
        position: 'absolute',
        top: -100,
      }}
      source={require('../../pic.png')}
    />
  );
}
