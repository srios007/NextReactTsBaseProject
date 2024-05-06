export interface HttpAdapter {
  get: (url: string, config?: any) => Promise<{ data: JSON; status: number }>;
  delete: (url: string, config?: any) => Promise<{ data: JSON; status: number }>;
  post: (url: string, data: any, config?: any) => Promise<any>;
  put: (url: string, data: any, config?: any) => Promise<any>;
}
