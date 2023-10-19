import { View } from "react-native";
import React from "react";
import { Card, Text, Button } from "react-native-paper";

const NewArrivals = () => {
  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            paddingTop: 60,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Card
            style={{
              paddingBottom: 45,
              backgroundColor: "black",
            }}
          >
            <Card.Content>
              <Text variant="titleLarge" style={{ color: "white" }}>
                New Arrival
              </Text>
              <Text variant="titleLarge" style={{ color: "white" }}>
                Sales
              </Text>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={{
                  width: 150,
                  top: 20,
                }}
              >
                Explore now
              </Button>
            </Card.Content>
          </Card>
        </View>
      </View>
    </>
  );
};

export default NewArrivals;
