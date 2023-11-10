import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import CreateForm from "./pages/CreateForm";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateForm />} />
    </Routes>
  );
}

export default App;
