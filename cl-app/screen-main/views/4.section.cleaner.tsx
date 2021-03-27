import React, {useState, useEffect, useRef, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Divider,
  VStack,
  HStack,
  Container,
  Section,
} from '../../components/layouts';
import {ForEach} from '../../components/lists';

const styled = StyleSheet.create({
  section: {
    width: 23 * 7,
    height: 23 * 4.1,
    borderWidth: 1,
    backgroundColor: 'yellow',
  },
  cardImage: {
    width: 154,
    height: 86,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardTextWrapper: { paddingLeft: 12,
    paddingTop: 23,
    paddingBottom: 12,
    backgroundColor: 'white',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,}
});

export default function () {
  const renderListitem = () => (
    <TouchableOpacity>
       <VStack
      style={{
        // borderWidth: 1,
        marginRight: 21,
        width: 154,
      }}>
      <Image
        style={[styled.cardImage]}
        source={{
          uri:
            'https://heymeoww.com/wp-content/uploads/2021/01/Cinnamon-kitty-my-hero.jpg',
        }}
      />
      <Section
        style={[styled.cardTextWrapper]}>
        <Text>Some Title</Text>
        <Text>Some</Text>
      </Section>
    </VStack>
    </TouchableOpacity>
  );

  return (
    <Section
      style={{
        paddingTop: 23,
        paddingLeft: 23,
        paddingBottom: 23,
        backgroundColor: '#F4F5F9',
      }}>
      <HStack
        style={{
          // borderWidth: 1,
          marginRight: 12,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '800',
          }}>
          Categories
        </Text>
        <Text
          style={{
            color: '#FF0049',
            fontWeight: '700',
          }}>
          View All
        </Text>
      </HStack>
      <Section>
        <ForEach data={[1, 2, 3, 4, 5, 6, 7, 8]}>{renderListitem}</ForEach>
      </Section>
    </Section>
  );
}
