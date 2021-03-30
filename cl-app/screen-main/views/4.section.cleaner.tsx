import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Block} from '../../components/block';
import {HStack, VStack} from '../../components/layouts';
import {UserType} from '../screen.types';
import {UUID} from '../../utils/uuid'
const bgColor = '#EDF1F766';
const borderColor = '#CACADA52';

const App = () => {
  return (
    <VStack
      paddingTop={19}
      backgroundColor={bgColor}
      paddingLeft={20}
      paddingBottom={20}>
      <HStack
        paddingRight={12}
        marginBottom={20}
        justifyContent="space-between">
        <Block.Text fontWeight={'800'} h5>
          Left Title
        </Block.Text>
        <Block.Text
         h6
        color="red">Right Title</Block.Text>
      </HStack>
      <FlatList<User>
       keyExtractor={(item: {item: UserType}): string =>UUID()}
        horizontal
        ItemSeparatorComponent={() => <View style={{width: 16}} />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={() => (
          <Block backgroundColor={'white'} height={157} width={154}>
            <Block.Image
              borderTopLeftRadius={12}
              borderTopRightRadius={12}
              height={86}
              width={157}
              marginBottom={12}
              source={{
                uri:
                  'https://43d897265kne3ed0qv2ecjw2-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/21591430_web1_KittenRescue-ADW-200520-kitten_2.jpg',
              }}></Block.Image>
            <Block.Text paddingLeft={12} h5>
              Macka
            </Block.Text>
          </Block>
        )}
      />
    </VStack>
  );
};

export default App;
