import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import AboutPage from "./pages/AboutUs/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import SingleBlogPart from "./pages/SingleBlog/SingleBlogPart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/singleblog" element={<SingleBlogPart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
