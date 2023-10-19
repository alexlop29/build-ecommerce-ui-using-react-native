import { View, Text } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";

const Categories = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          paddingTop: 20,
          justifyContent: "center",
        }}
      >
        <Card style={{width: '90%'}}>
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={{ marginRight: 10, width: '30%' }}
          >
            Men
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={{ marginRight: 10, width: '30%' }}
          >
            Kids
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={{ marginRight: 10, width: '30%' }}
          >
            Women
          </Button>
        </Card>
      </View>
    </>
  );
};

export default Categories;
