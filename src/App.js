import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import AboutPage from "./pages/AboutUs/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import SingleBlogPart from "./pages/SingleBlog/SingleBlogPart";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import RecentProduct from "./pages/OurRecentProduct/RecentProduct";
import Addtocart from "./pages/AddToCart/Addtocart";
import WishListPage from "./pages/WishList/WishListPage";
import MainLogin from "./components/Login/MainLogin";
import MainRegister from "./components/Register/MainRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/wishlist" element={<WishListPage />}></Route>
        <Route path="/addtocart" element={<Addtocart />}></Route>
        <Route path="/sinlgeshoppage/:id" element={<SingleProduct />}></Route>
        <Route path="/sinlgepropage" element={<RecentProduct />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/singleblog/:id" element={<SingleBlogPart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<MainLogin />}></Route>
        <Route path="/register" element={<MainRegister />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
