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

const HeaderSectionStyle = StyleSheet.create({
  hstack: {
    marginRight: 12,
    marginBottom: 23,
  },
  textLeft: {fontSize: 16, color: 'black', fontWeight: '800'},
  textRight: {fontWeight: '700', color: '#FF0049'},
});

function HeaderSection({title_left = '', title_right = ''}) {
  return (
    <HStack style={[HeaderSectionStyle.hstack]}>
      <Text style={[HeaderSectionStyle.textLeft]}>{title_left}</Text>
      <Text style={[HeaderSectionStyle.textRight]}>{title_right}</Text>
    </HStack>
  );
}

const RenderListitemStyle = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    // borderWidth: 1,
    marginRight: 21,
    borderRadius: 12,
    padding: 8,
  },
  cardText: {  position: 'absolute',
  padding: 12,
  color: '#fff',}
});

const RenderListitem = ({item}) => (
  <TouchableOpacity>
    <Section>
    <Image
      style={[{backgroundColor: item}, RenderListitemStyle.image]}
      source={{
        uri:
          'https://heymeoww.com/wp-content/uploads/2021/01/Cinnamon-kitty-my-hero.jpg',
      }}
    />
    <Text
      style={[RenderListitemStyle.cardText]}>
      Some Title
    </Text>
  </Section>
  </TouchableOpacity>
);

const baseStyle = StyleSheet.create({
  vstack: { paddingTop: 23,
    paddingLeft: 23,
    paddingBottom: 23,
    height: 23 * 8,
    backgroundColor: '#fff',}
})

export default function () {
  return (
    <VStack    paddingLeft={23}>
    <HeaderSection title_left="Categories" title_right="View All" />
      <ForEach data={['#00ACF6', '#FFBC42', '#1DBF73', '#A375FF']}>
        {(item,index) => <RenderListitem key={index} item={item} />}
      </ForEach>
  </VStack>
  );
}
