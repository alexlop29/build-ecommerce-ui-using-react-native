import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";

const data = [
  {
    id: 1,
    title: "Item 1",
  },
  {
    id: 2,
    title: "Item 2",
  },
  {
    id: 3,
    title: "Item 3",
  },
  {
    id: 4,
    title: "Item 4",
  },
];

const ProductView = () => {
  return (
    <>
      <View style={{ 
        paddingTop: 40,
        backgroundColor: "white",
        height:500,
        paddingLeft: 20,
      }}>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item }) => 
            <Card style={{ width: 200, height: 250, marginRight: 20 }}>
              <Card.Content>
              <Text>{item.title}</Text>
              </Card.Content>
            </Card>
          }
        />
      </View>
    </>
  );
};

export default ProductView;
