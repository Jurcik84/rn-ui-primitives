import React from "react";
import { FlatList, TextBase, View, Text, Button } from "react-native";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Row, Separator } from "../components/Row";
import users from "../data/users";

export default ({ navigation }) => {
  const count = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();

  return <View>
  
    <FlatList
      data={users}
      keyExtractor={item => {
        return `${item.id.value}-${item.phone}`;
      }}
      renderItem={({ item }) => {
        const name = `${item.name.first} ${item.name.last}`;

        return (
          <Row
            image={{ uri: item.picture.thumbnail }}
            title={name}
            subtitle={item.email}
            onPress={() => navigation.push("ContactDetails", {
              contact: item
            })}
          />
        );
      }}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => <Separator />}
      ListFooterComponent={() => <Separator />}
      contentContainerStyle={{ paddingVertical: 20 }}
    />
  </View>
}
