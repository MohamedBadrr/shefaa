import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  const queryCleint = new QueryClient();
  return (
    <QueryClientProvider client={queryCleint}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
