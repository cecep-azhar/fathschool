import { ResponseTypeBlogs } from "@/types/response";
import { useQuery } from "react-query";
import axios from "axios";

export function useGetBlogs() {
  const { data, error, isError, isLoading, isIdle, status } = useQuery({
    queryFn: async () => await axios.get<ResponseTypeBlogs>('http://localhost:8000/api/blogs'),
    queryKey: ['blogs'],
  })

  return {
    dataResponse: data?.data.data,
    error,
    isError,
    isLoading,
    isIdle,
    status
  }
}