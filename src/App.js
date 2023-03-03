import React, { Suspense } from "react";

// import Layout from "./layouts/Layout";
import Preloader from "./components/preloader/Preloader";
import Index from "./pages/Index";

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Index />
    </Suspense>
  );
}
export default App;