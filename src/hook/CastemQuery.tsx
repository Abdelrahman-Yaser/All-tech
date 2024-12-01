import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import api from "../apis/axios/Axios";

interface IAuthenticatedQuery {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig;
}

const useCustomQuery = ({ queryKey, url, config }: IAuthenticatedQuery) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await api.get(url, config);
      return data;
    },
  });
};

export default useCustomQuery;