"use client";

import { useEffect } from "react";
import { postVisitorData } from "@/hooks/POST/usePostVisitor";

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      const pageUrl = window.location.href;

      try {
        const response = await postVisitorData(pageUrl);
        if (response?.status) {
          console.log("Visitor data recorded:", response.data);
        } else {
          console.error("Failed to record visitor data:", response?.message);
        }
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}
