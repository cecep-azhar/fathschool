"use client";

import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const clientQuery = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <SkeletonTheme baseColor="#e4e4e7" highlightColor="#d4d4d8" borderRadius={8}>
      <QueryClientProvider client={clientQuery}>{children}</QueryClientProvider>
    </SkeletonTheme>
  );
}
