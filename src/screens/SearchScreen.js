import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SearchBarComponent from "../components/SearchBar";
//import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
//import { searchApi, results, errorMessage } from ".././hooks/useResults";
//import searchApi from "../utils/searchApi";
import yelp from "../api/yelp";

export default class SearchScreen extends Component {
  state = {
    term: "",
    results: [],
    errorMessage: "",
  };

  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <SearchBarComponent
      //term={this.state.term}
      //onTermChange={this.updateText}
      //onTermSubmit={this.submitSearchAndClearInput}
      />
    ),
  });

  searchApi = async (searchTerm) => {
    //console.log("what is the search term: " + searchTerm);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      this.setState({ results: response.data.businesses });
    } catch (e) {
      this.setState({ errorMessage: e.message });
    }
  };
  //const [term, setTerm] = useState("");
  //const [searchApi, results, errorMessage] = useResults();
  componentDidMount() {
    //this.searchApi("pizza");
    console.log("props: ", this.props.navigation);
  }
  //console.log(results);
  filterResultsByPrice = (price) => {
    //console.log("did you call me ?");
    return this.state.results.filter((result) => {
      //console.log("checking each result: ", result.price === price);
      return result.price === price;
    });
  };

  submitSearchAndClearInput = () => {
    //console.log("this is the term before calling API ", this.state.term);
    //console.log("type of term is: ", this.state.term);
    this.searchApi(this.state.term);
    this.setState({ term: "" });
  };

  updateText = (incoming) => {
    //console.log("incoming: ", incoming);
    this.setState({ term: incoming });
    //console.log("checking term state: ", this.state.term);
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.searchContainer}>
          {/* {console.log("calling before SearchBarComponent :", this.state.term)} */}
          {/* <SearchBarComponent
          term={this.state.term}
          onTermChange={this.updateText}
          onTermSubmit={this.submitSearchAndClearInput}
        /> */}
          {this.state.errorMessage ? (
            <Text>{this.state.errorMessage}</Text>
          ) : null}
          <ScrollView>
            <ResultsList
              results={this.filterResultsByPrice("$")}
              title="Cost Effective"
            />
            <ResultsList
              results={this.filterResultsByPrice("$$")}
              title={"Bit Pricier"}
            />
            <ResultsList
              results={this.filterResultsByPrice("$$$")}
              title={"Big Spender"}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    marginLeft: 15,
    flex: 1,
  },
});
