import React, {useState, useEffect, useRef, useMemo} from 'react';
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


function Button({children}) {
  return <TouchableOpacity>{children}</TouchableOpacity>;
}
