import axios from "axios";

  export async function getProducts(): Promise<any> {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response;
  }