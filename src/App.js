import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import AboutPage from "./pages/AboutUs/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import SingleBlogPart from "./pages/SingleBlog/SingleBlogPart";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/singleblog" element={<SingleBlogPart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
