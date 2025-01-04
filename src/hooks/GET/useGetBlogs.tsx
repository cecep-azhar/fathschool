import { useQuery } from "react-query";
import axios from "axios";

/**
 * * Custom hook to fetch blog data from the backend.
 *
 * @param {string} [slug] - Optional slug to fetch a specific blog.
 * @returns {object} - An object containing the query response, loading status, and error status.
 */

export function useGetBlogs(slug?: string) {
  const url = slug ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${slug}` : `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`;

  return useQuery({
    queryFn: async () => {
      const response = await axios.get(url, {
        headers: {Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`}
      });
      return response.data;
    },
    queryKey: ["blogs", slug],
    // enabled: false
  });
}