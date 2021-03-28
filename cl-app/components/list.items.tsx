import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  ComponentProps,
  FunctionComponent,
} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
  Dimensions,
  Easing,
  TouchableOpacity,
} from 'react-native';
import {HStack, VStack} from './layouts';

export const CardWithTextOnImage: FunctionComponent<
  ComponentProps<typeof View>
> = () => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/originals/f8/4e/ee/f84eeed10fafe3abf27e0ef2d5d34da9.png',
        }}
        style={{
          width: 90,
          height: 90,
        }}
      />
      <Text
        style={{
          top: 12,
          left: 12,
          position: 'absolute',
          color: 'white',
        }}>
        Some text
      </Text>
    </TouchableOpacity>
  );
};

export const CardTextUnderImage: FunctionComponent<
  ComponentProps<typeof View>
> = () => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/originals/f8/4e/ee/f84eeed10fafe3abf27e0ef2d5d34da9.png',
        }}
        style={{
          width: 154,
          height: 86,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />
      <VStack width={154} height={157} padding={12}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            marginBottom: 12,
          }}>
          Some Title
        </Text>
        <Text>
          Some Sub{' '}
          <Text
            style={{
              color: 'red',
            }}>
            Title
          </Text>
        </Text>
      </VStack>
    </TouchableOpacity>
  );
};

export const CardDoubleDecker: FunctionComponent<
  ComponentProps<typeof View>
> = () => {
  return (
    <VStack 
    borderRadius={12}
    borderWidth={1}
    borderColor={'##707070'}
    padding={16}>
      <HStack 
      marginBottom={23}
      paddingBottom={23}
      borderBottomWidth={1}
      borderBottomColor={'#707070'}
      justifyContent="flex-start">
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/f8/4e/ee/f84eeed10fafe3abf27e0ef2d5d34da9.png',
          }}
          style={{
            width: 66,
            height: 66,
            borderRadius: 12,
            marginRight: 18,
          }}
        />
        <VStack>
          <Text style={{
                fontSize: 16,
                fontWeight: '800'
            }}>asda</Text>
          <Text   style={{
                fontSize: 12,
                color: '#7F7F7F'
            }}>asda</Text>
          <Text   style={{
                fontSize: 12,
                color: '#7F7F7F'
            }}>asda</Text>
        </VStack>
      </HStack>
      <HStack>
        <HStack>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/f8/4e/ee/f84eeed10fafe3abf27e0ef2d5d34da9.png',
            }}
            style={{
              width: 54,
              height: 54,
              borderRadius: 27,
              marginRight: 27,
              borderWidth: 6,
              borderColor: 'gray'
            }}
          />
          <VStack>
            <Text style={{
                fontSize: 16,
                fontWeight: '800'
            }}>asda</Text>
            <Text  style={{
                fontSize: 12,
                color: '#7F7F7F'
            }}>asda</Text>
          </VStack>
        </HStack>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/f8/4e/ee/f84eeed10fafe3abf27e0ef2d5d34da9.png',
          }}
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            marginRight: 24,
          }}
        />
      </HStack>
    </VStack>
  );
};
