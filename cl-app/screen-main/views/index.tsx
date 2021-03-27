import React from 'react';
import {Divider, VStack, HStack, Container, Section} from '../../components/layouts';

import {GridHelper, UtilImageAppDisplay} from '../../utils/index';

import Header from './1.section.header';
import Category from './2.section.category';
import Recommended from './3.section.recommended';
import Cleaner from './4.section.cleaner';
export default function () {
  return (
    <Container>
      <Header />
      <Category />
      <Recommended />
      <Cleaner />
      {false && (
        <>
          <GridHelper horizontal={false} />
          <UtilImageAppDisplay />
        </>
      )}
    </Container>
  );
}
