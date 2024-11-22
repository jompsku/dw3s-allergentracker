import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "@toolpad/core/AppProvider";
import theme from "./themes/theme";

import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider theme={theme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>
);
