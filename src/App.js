import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";


function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
       </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;
