import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Block} from '../../components/block';

import {HStack, VStack} from '../../components/layouts';
import {CardWithTextOnImage} from '../../components/list.items';

import {useMainScreenContext} from '../controller';

// https://blog.harveydelaney.com/creating-your-own-mini-redux-in-react/
// https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm

const App = () => {
  const {
    state: {users, loading, error},
  } = useMainScreenContext();
  // console.log('ctx', users, loading, error);
  if (loading) return <Block.Text>...Loading</Block.Text>;
  if (error) return <Block.Text>..Error</Block.Text>;
  return (
    <VStack
      paddingLeft={20}
      paddingBottom={20}
      // borderWidth={1}
      borderBottomLeftRadius={12}
      borderBottomRightRadius={12}>
      <HStack
        paddingRight={19}
        marginBottom={20}
        justifyContent="space-between">
        <Block.Text fontWeight={'800'} h5>
          Left Title
        </Block.Text>
        <Block.Text h6 color="red">
          Right Title
        </Block.Text>
      </HStack>
      <FlatList
        keyExtractor={(item) => item.toString()}
        horizontal
        ItemSeparatorComponent={() => <View style={{width: 16}} />}
        data={users}
        renderItem={({item}) => <CardWithTextOnImage item={item} />}
      />
    </VStack>
  );
};

export default App;
