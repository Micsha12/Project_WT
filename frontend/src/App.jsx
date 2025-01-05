import React from "react";
import AppRoutes from "./routes";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;