import { message } from "antd";
import { useEffect, useState } from "react";
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestOptions extends AxiosRequestConfig {}

interface RequestResult<T = any> {
  response: T | undefined;
  loading: boolean;
  error: AxiosError | Record<string, unknown>;
  request: (overrideOptions?: RequestOptions, sync?: boolean) => Promise<{ response?: T; error?: AxiosError; success: boolean }>;
}

export function usePostRequest<T = any>(options: RequestOptions = {}): RequestResult<T> {
  return useRequest<T>({ method: 'POST', ...options });
}

export function usePutRequest<T = any>(options: RequestOptions = {}): RequestResult<T> {
  return useRequest<T>({ method: 'PUT', ...options });
}

export function usePatchRequest<T = any>(options: RequestOptions = {}): RequestResult<T> {
  return useRequest<T>({ method: 'PATCH', ...options });
}

export function useGetRequest<T = any>(options: RequestOptions = {}): RequestResult<T> {
  return useRequest<T>({ method: 'GET', ...options });
}

export function useDeleteRequest<T = any>(options: RequestOptions = {}): RequestResult<T> {
  return useRequest<T>({ method: 'DELETE', ...options });
}

export function useRequest<T = any>(options: RequestOptions = {}): RequestResult<T> {
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | Record<string, unknown>>({});

  async function request(overrideOptions: RequestOptions = {}, sync: boolean = false): Promise<{ response?: T; error?: AxiosError; success: boolean }> {
    setLoading(true);

    try {
      const { data } = await Axios.request<T>({
        ...options,
        ...overrideOptions,
      });

      if (!sync) setResponse(data);

      return { response: data, success: true };
    } catch (e) {
      const axiosError = e as AxiosError;
      setError(axiosError.response?.data || {});
      if (axiosError.response === undefined) {
        message.warning('Проверьте интернет соединение');
      }
      else if (axiosError.response && axiosError.response.status >= 500) {
        message.warning('Ошибка сервера.');
      }
      return { error: axiosError, success: false };
    } finally {
      if (!sync) setLoading(false);
    }
  }

  return {
    loading,
    request,
    error,
    response,
  };
}

interface LoadOptions extends RequestOptions {}

export function useLoad<T = any>(options: LoadOptions, dependencies: React.DependencyList = []): RequestResult<T> {
  const request = useRequest<T>({ method: 'GET', ...options });
  
  useEffect(() => {
    request.request();
  }, dependencies);

  return request;
}

