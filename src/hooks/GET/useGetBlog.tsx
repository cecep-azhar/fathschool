import { ResponseTypeBlogDetail } from "@/types/response";
import axios from "axios";
import { useQuery } from "react-query";

export function useGetBlog(slug: string) {
  const { data, isLoading, isError, isIdle, isSuccess } = useQuery({
    queryFn: async () => await axios.get<ResponseTypeBlogDetail>(`http://localhost:8000/api/blogs/${slug}`),
    queryKey: ["blog", slug],
  });

  return {
    dataResponse: data?.data.data,
    isLoading,
    isError,
    isIdle,
    isSuccess
  }
}