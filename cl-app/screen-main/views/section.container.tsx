import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Header from './1.section.header';
import Category from './2.section.category';
import Recommended from './3.section.recommended';
import Cleaner from './4.section.cleaner';
import {Root} from '../controller';
export default function () {
  return (
    <Root>
      <Header />
      <Category />
      <Recommended />
      <Cleaner />
    </Root>
  );
}

//  {/* <Text>{JSON.stringify(value)}</Text> */}
//       {/* {false && (
//         <>
//           <GridHelper horizontal={false} />
//           <UtilImageAppDisplay />
//         </>
//       )} */}
