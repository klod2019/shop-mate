import axios from "../api/api";

export default async function fetchItems() {
  const response = await axios.get("/products");
  return response.data.rows;
}
