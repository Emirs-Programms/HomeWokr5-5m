import Users from "./users";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
  
       <Routes>

       <Route path="/" element={<Home />}/>
       <Route path="/user/:id" element={<Users />}/>
       
       
       </Routes>
      </BrowserRouter>
     
    </div>

  );
}

export default App;
