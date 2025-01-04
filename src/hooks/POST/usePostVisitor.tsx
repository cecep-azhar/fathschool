import axios from "axios";
import { useMutation } from "react-query";


/**
 * * Get the IP address of the visitor.
 *
 * @returns {Promise<string>} The IP address.
 */
const getIPAddress = async (): Promise<string> => {
  const response = await axios.get(process.env.NEXT_PUBLIC_IPIFY_API || "");
  return response.data.ip;
};

/**
 * * A hook to track visitor data to the server.
 *
 * @returns {UseMutationResult} A result object from useMutation
 */
export const usePostVisitorData = () => {
  return useMutation(async (pageUrl: string) => {
    const userAgent = navigator.userAgent;

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/track_visitor`,
      {
        page_url: pageUrl,
        ip_address: await getIPAddress(), // Helper function
        user_agent: userAgent,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  });
};
