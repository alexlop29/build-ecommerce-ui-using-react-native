import { Image, View } from "react-native";
import React from "react";
import { Card, Text, Button } from "react-native-paper";

const NewArrivals = () => {
  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            paddingTop: 40,
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
              <Text
                variant="displaySmall"
                style={{ color: "white", fontWeight: "bold" }}
              >
                New Arrival
              </Text>
              <Text
                variant="displaySmall"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Sales
              </Text>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={{
                  width: 150,
                  top: 30,
                  left: 150,
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
