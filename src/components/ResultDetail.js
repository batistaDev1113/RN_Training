import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.image}>
      <Image
        source={{ uri: result.image_url }}
        style={{ width: 250, height: 120, marginVertical: 10, borderRadius: 4 }}
      />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <View style={styles.reviewsStyle}>
        <Text style={styles.ratingStyle}>{result.rating} Stars</Text>
        <Text style={styles.ratingStyle}>{result.review_count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginRight: 10,
  },
  ratingStyle: {
    marginBottom: 10,
    marginRight: 10,
    marginTop: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
  reviewsStyle: {
    flexDirection: "row",
    alignItems: "center",
    color: "#CCC",
    opacity: 0.5,
  },
});
export default ResultDetail;
