import { callGetHttpAdapter } from "./axios/CallHttpAdapter";

  export async function getProducts(): Promise<any> {
    const response = await callGetHttpAdapter("https://fakestoreapi.com/products", (data) => data);
    return response;
  }