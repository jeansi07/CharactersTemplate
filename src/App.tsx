import { ErrorMessage, Layout } from "@/components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";

const App = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        {/* PUBLIC ROUTER */}
        <Route index path="/" element={<Home />} />
        <Route index path="*" element={<ErrorMessage />} />
      </Routes>
    </Layout>
  );
};

export default App;
