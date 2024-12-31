import { useQuery } from "react-query";
import { ResponseTypeFaq } from "@/types/response";
import axios from "axios";

export function useGetFaq() {
  const { data, error, isError, isLoading, isIdle, status } = useQuery({
    queryFn: async () =>
      await axios.get<ResponseTypeFaq>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/faq`),
    queryKey: ["faq"],
  });

  return {
    response: data,
    data: data?.data.data.section_data.data,
    error,
    isError,
    isLoading,
    isIdle,
    status,
  }
}

