import axios, { AxiosRequestConfig } from "axios";
import { HttpAdapter } from "./HttpAdapter";


export class AxiosAdapter implements HttpAdapter {
  async get(url: string, config?: AxiosRequestConfig): Promise<any> {
    const response = await axios.get(url, config);
    return response;
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    const response = await axios.delete(url, config);
    return response;
  }

  async post(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    const response = await axios.post(url, data, config);
    return response;
  }

  async put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    const response = await axios.put(url, data, config);
    return response;
  }
}


