import { RouterProvider } from "react-router";
import "./App.css";
import ReactQueryProvider from "./Providers/ReactQueryProvider";
import { router } from "./Router";
import { Toaster } from "@/components/ui/sonner";
function App() {
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
