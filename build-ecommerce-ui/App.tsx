import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Account from "./pages/Account";
import { View } from "react-native";

export default function App() {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    tabBarStyle: {
      backgroundColor: 'black',
      height: 80,
      borderRadius: 200,
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarItemStyle: {
      backgroundColor: 'black',
      borderRadius: 200,
      height: 80,
    },
  };

  return (
    <NavigationContainer>
      <Tab.Navigator {...{ screenOptions }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="WishList"
          component={WishList}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
