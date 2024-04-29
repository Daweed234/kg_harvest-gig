import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Services" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
