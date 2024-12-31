import { ResponseAPI, ResponseTypeTestimonials } from "@/types/response";
import axios from "axios";
import { useQuery } from "react-query";

export function useGetTestimonials() {
  const { data, error, isError, isLoading, isIdle, status } = useQuery({
    queryFn: async () =>
      await axios.get<ResponseAPI>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/testimonials`
      ),
    queryKey: ["testimonials"],
  });

  return {
    response: data,
    data: data?.data.data.section_data.data as ResponseTypeTestimonials[],
    error,
    isError,
    isLoading,
    isIdle,
    status,
  };
}
