import React, {useState, useEffect, useRef, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styled = StyleSheet.create({});


type TextType = {
  fontWeight?: string,
  font?: string,
  foregroundColor?:string,
  lineLimit?: number,
  children?: any,
  lineSpacing?: number
}

type ButtonTypes = {
  padding: number,
  background: string,
  foregroundColor: string,
  clipShape: string
}


export default function (props: TextType) {
  const {children,fontWeight,font} = props;

  return <Text style={[]}>{children}</Text>;
}
