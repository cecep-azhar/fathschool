import { ResponseLandingPage } from "@/types/response";
import { useQuery } from "react-query";
import axios from "axios";

export function useGetLandingPage() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryFn: async () => await axios.get<ResponseLandingPage>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/landing_page`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
      }
    }),
    queryKey: ["landing-page"],
    enabled: false // Ganti Icon Benefits data default
  });

  return {
    response: data,
    dataResponse: data?.data.data,
    isLoading,
    isError,
    isSuccess
  };
}
