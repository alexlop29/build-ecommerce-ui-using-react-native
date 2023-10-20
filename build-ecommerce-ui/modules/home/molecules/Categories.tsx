import { View, Text } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";

const Categories = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          paddingTop: 40,
          paddingLeft: 30,
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "90%", backgroundColor: "transparent" }}>
          <View style={{ flexDirection: "row" }}>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={{ marginRight: 10, flex: 1 }}
              contentStyle={{ width: "100%" }}
            >
              Men
            </Button>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={{ marginRight: 10, flex: 1 }}
              contentStyle={{ width: "100%" }}
            >
              Kids
            </Button>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={{ flex: 1 }}
              contentStyle={{ width: "100%" }}
            >
              Women
            </Button>
          </View>
        </Card>
      </View>
    </>
  );
};

export default Categories;
