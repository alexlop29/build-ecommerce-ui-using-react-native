import { View} from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/Octicons';

const Menu = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
    <View style={{
      backgroundColor: "white",
      paddingTop: 60,
      padding: 20,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Icon name="three-bars" size={20}/>
      <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Shoes</Text>
      <Icon2 name="search" size={20} />
    </View>
    </View>
  );
};

export default Menu;
