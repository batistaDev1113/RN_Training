// import { useEffect, useState } from "react";
// import yelp from ".././api/yelp";

// export default SearchApi() => {
//   const [results, setResults] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   const returnErrorMessage = () => {
//     return errorMessage;
//   };

//   const results = () => {
//     return results;
//   };

//   const searchApi = async (searchTerm) => {
//     try {
//       const response = await yelp.get("/search", {
//         params: {
//           limit: 50,
//           term: searchTerm,
//           location: "san jose",
//         },
//       });
//       setResults(response.data.businesses);
//     } catch (e) {
//       setErrorMessage("Something went wrong with the search request");
//     }
//   };

//   useEffect(() => {
//     searchApi("pizza");
//   }, []);

//   return [searchApi, results, errorMessage];
// };
