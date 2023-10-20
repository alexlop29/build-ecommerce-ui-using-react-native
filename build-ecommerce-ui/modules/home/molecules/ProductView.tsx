import { View, Text, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "react-native-paper";

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
    title: "Nike 639",
  },
  {
    id: 4,
    title: "Item 4",
  },
];

const ProductView = () => {
  return (
    <>
      <View
        style={{
          paddingTop: 40,
          backgroundColor: "white",
          height: 500,
          paddingLeft: 20,
        }}
      >
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item }) => (
            <Card style={{ width: 200, height: 250, marginRight: 20, overflow: "visible"  }}>
              <Card.Cover source={require("../../../assets/nike.png")} />
              <Card.Content style={{alignItems: 'center'}}>
                <Text style={{top: -20, left: -50}}>{item.title}</Text>
                <Button
                  mode="contained"
                  onPress={() => console.log("Pressed")}
                  style={{ bottom: -20, width: 180}}
                >
                  $180
                </Button>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </>
  );
};

export default ProductView;
