import { NeonAuthUIProvider } from "@neondatabase/auth-ui";
import "@neondatabase/auth-ui/css";
// import { authClient } from "./auth";
import { authClient } from "@/../lib/auth/client";

function App() {
  return (
    <NeonAuthUIProvider authClient={authClient}>
      {/* Your app components */}
    </NeonAuthUIProvider>
  );
}
