import axios from "axios";
import { useQuery } from "react-query";

export const postVisitorData = async (pageUrl: string) => {
  try {
    const userAgent = navigator.userAgent;
    const ipAddress = await getIP();

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/track_visitor`,
      {
        page_url: pageUrl,
        ip_address: ipAddress,
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
  } catch (error) {
    console.error("Error posting visitor data:", error);
    return null;
  }

};


const getIP = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_IPIFY_API}`);
    return res.data.ip;
  } catch (error) {
    console.error("Failed to get IP address:", error);
    return "Unknown";
  }
};
