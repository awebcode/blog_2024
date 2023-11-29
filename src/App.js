import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Tags from "./pages/admin/screens/tags/Tags";
import Categories from "./pages/admin/screens/categories/Categories";
import ManageUsers from "./pages/admin/screens/users/ManageUsers";
import UpdateUserProfile from "./pages/admin/screens/users/EditUser";
import Pricing from "./components/home/Pricing";
import Footer from "./components/Footer";
import Articles from "./components/home/Articles";
import About_us from "./components/home/About_us";
import Contact from "./components/home/Contact";
import FAQPage from "./components/home/Faq";
import UserPage from "./components/Single_User";
import ArticlesMain from "./pages/home/container/Articles";
function App() {
  const navigate = useNavigate()
   const location = useLocation();
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/blog?" element={<ArticlesMain title="Category -Articles" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user/single-user/:id" element={<UserPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/users" element={<ManageUsers />} />
          <Route path="posts/manage/users/edit/:userId" element={<UpdateUserProfile />} />
          <Route path="posts/tags" element={<Tags />} />
          <Route path="posts/categories" element={<Categories />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route>

        {/* home */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      {!location.pathname.includes("admin") && <Footer />}
      <Toaster />
    </div>
  );
}

export default App;
