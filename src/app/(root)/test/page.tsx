"use client";

import { useGetLandingPage } from "@/hooks/GET/useGetLandingPage";

export default function Page() {
  const { dataResponse } = useGetLandingPage();
  return <pre>{JSON.stringify(dataResponse, null, 2)}</pre>;
}
