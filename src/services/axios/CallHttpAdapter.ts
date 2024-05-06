import { AxiosAdapter } from "./AxiosAdapter";
import { ErrorHandler } from "./ErrorHandler";
import { HttpAdapter } from "./HttpAdapter";



export const httpAdapter: HttpAdapter = new AxiosAdapter();

export async function callGetHttpAdapter(url: string, adapterFunction: (data: any) => any, config?: any) {
  try {
    const response = await httpAdapter.get(url, config);
    const adaptedData = adapterFunction(response.data);
    return adaptedData;
  } catch (error: any) {
    return ErrorHandler({
      message: error.message,
      status: error.status ?? error.response?.status,
    });
  }
}

export async function callDeleteHttpAdapter(url: string, config?: any) {
  try {
    const response = await httpAdapter.delete(url, config);
    return response;
  } catch (error: any) {
    throw ErrorHandler({
      message: error.response.data.detail ?? error.message,
      status: error.status ?? error.response?.status,
    });
  }
}

export async function callPostHttpAdapter(url: string, data: any, config?: any) {
  try {
    const response = await httpAdapter.post(url, data, config);
    return response;
  } catch (error: any) {
    ErrorHandler({
      message: error.response.data.detail ?? error.message,
      status: error.status ?? error.response?.status,
    });
    throw error;
  }
}

export async function callPutHttpAdapter(url: string, data: any, config?: any) {
  try {
    const response = await httpAdapter.put(url, data, config);
    return response;
  } catch (error: any) {
    ErrorHandler({
      message: error.response.data.detail ?? error.message,
      status: error.status ?? error.response?.status,
    });
    throw error;
  }
}
