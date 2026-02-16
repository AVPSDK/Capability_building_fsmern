import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Sidebar from "./Components/sidebar";
import Footer from "./Components/footer";
import Dashboard from "./pages/dashboard";
import AddCategory from "./pages/addcategory";
import ViewCategory from "./pages/viewcategory";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/view-category" element={<ViewCategory />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
export default App;