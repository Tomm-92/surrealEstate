import axios from "axios";

const addProperty = () => {
  return axios.post("http://localhost:4000/api/v1/PropertyListing");
};

export default addProperty;
