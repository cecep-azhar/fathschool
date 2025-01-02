import { Blog } from "@/types/response";
import { useQuery } from "react-query";
import axios from "axios";

export function useGetBlogs(slug?: string) {
  const url = slug ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${slug}` : `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`;

  const { data, isLoading, isError, isIdle, isSuccess } = useQuery({
    queryFn: async () => await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
      }
    }),
    queryKey: ["blogs", slug],
    // enabled: false
  });

  return {
    response: data?.data,
    dataResponse: slug ? data?.data.data : data?.data.data,
    isLoading,
    isError,
    isIdle,
    isSuccess
  }
}

interface ResponseDetailBlog {
  status: boolean
  message: string
  data: Blog
}

interface ResponseTypeBlogs {
  status: boolean
  message: string
  data: Blog[]
}