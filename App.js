import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import SearchBarComponent from "./src/components/SearchBar";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native";

const Stack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerStyle: { backgroundColor: "#90e0ef", height: 250 },
      }),
    },
    Restaurant_Photos: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    // defaultNavigationOptions: {
    //   title: "Business Search",
    // },
  }
);

export default createAppContainer(Stack);
