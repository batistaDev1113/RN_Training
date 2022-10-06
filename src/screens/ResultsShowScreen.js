import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [photosResult, setPhotosResult] = useState(null);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      //console.log("response: ", response.data.photos);
      setPhotosResult(response.data);
    } catch (e) {
      console.log("An error has ocurred");
    }
  };

  useEffect(() => {
    getResult(id);
  }, [id]);

  if (!photosResult) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
      }}
    >
      <Text>{photosResult.name}</Text>
      <FlatList
        data={photosResult.photos !== null && photosResult.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{
              width: 300,
              height: 160,
              marginVertical: 10,
              borderRadius: 4,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ResultsShowScreen;
