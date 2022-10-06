import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ results, title, navigation }) => {
  //console.log("CALINGGGGGGGGGGGGGGGGGGGGGGG");
  //console.log("results are coming? : ", results);
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.listContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        renderItem={({ item }) => {
          console.log("renderItem", item);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Restaurant_Photos", { id: item.id })
              }
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  listContainer: {
    marginVertical: 20,
  },
});
export default withNavigation(ResultsList);
