import { callDeleteHttpAdapter, callGetHttpAdapter, callPostHttpAdapter, callPutHttpAdapter } from "./axios/CallHttpAdapter";
import { FakeProduct } from '../types/fakeProduct';

const baseUrl = "https://fakestoreapi.com";

export async function getProducts(): Promise<any> {
  const response = await callGetHttpAdapter(`${baseUrl}/products`, (data) => data);
  return response as FakeProduct[];
}

export async function getProduct(id: string): Promise<any> {
  const response = await callGetHttpAdapter(`${baseUrl}/products/${id}`, (data) => data);
  return response as FakeProduct;
}

export async function updateProduct(id: string, fakeProduct: FakeProduct): Promise<any> {
  const response = await callPutHttpAdapter(`${baseUrl}/products/${id}`, fakeProduct);
  return response;
}

export async function postProduct(  fakeProduct: FakeProduct): Promise<any> {
  const response = await callPostHttpAdapter(`${baseUrl}/products}`, fakeProduct);
  return response;
}

export async function deleteProduct(id: string): Promise<any> {
  const response = await callDeleteHttpAdapter(`${baseUrl}/products/${id}`);
  return response;
}