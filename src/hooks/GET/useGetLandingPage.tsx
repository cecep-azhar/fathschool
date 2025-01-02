import { ResponseLandingPage } from "@/types/response";
import { useQuery } from "react-query";
import axios from "axios";

export function useGetLandingPage() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryFn: async () => await axios.get<ResponseLandingPage>(`https://cms.fathschool.com/api/landing_page`, {
      headers: {
        Authorization: `Bearer s6xy6SVqt1C547xESgiTwa3lce01AzPbceEMBgO5`,
      }
    }),
    queryKey: ["landing-page"],
    enabled: false
  });

  return {
    response: data,
    dataResponse: data?.data.data,
    isLoading,
    isError,
    isSuccess
  };
}
