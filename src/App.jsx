import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Details from "./pages/Details";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
}

export default App;
