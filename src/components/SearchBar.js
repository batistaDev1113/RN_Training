import { useState } from "react";
import { Text, TextInput, StyleSheet, View, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";

const SearchBarComponent = ({ term, onTermChange, onTermSubmit }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.searchContainer}>
      <SearchBar
        placeholder="Search..."
        platform={Platform.OS === "ios" ? "ios" : "android"}
        containerStyle={{ backgroundColor: "#90e0ef" }}
        searchIcon={
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
        }
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={{ backgroundColor: "#edf2f4", paddingLeft: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "red",
    marginTop: 60,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#000000",
  },
  searchIcon: {
    paddingHorizontal: 1,
  },
});

export default SearchBarComponent;
