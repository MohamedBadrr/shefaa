import { RouterProvider } from "react-router";
import "./App.css";
import ReactQueryProvider from "./Providers/ReactQueryProvider";
import { router } from "./Router";
import { Toaster } from "@/components/ui/sonner";
import { useAuthStore } from "./store/AuthStore";
import { useEffect } from "react";
function App() {
  const { initAuth } = useAuthStore();
  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return (
    <>
      <ReactQueryProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ReactQueryProvider>
    </>
  );
}

export default App;
