import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Switch is required in v5

import "./index.css";

import { Auth0Provider } from "@auth0/auth0-react";

import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CreatePost from "./pages/CreatePost";
import CategoryPost from "./pages/CategoryPosts";
import AuthorPosts from "./pages/AuthorPosts";
import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";
import DeletePost from "./pages/DeletePost";
import Logout from "./pages/Logout";
import { ImOpt } from "react-icons/im";


const App = () => (
  
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/create" element={<CreatePost />} />
          <Route
            path="/posts/categories/:category"
            element={<CategoryPost />}
          />
          <Route path="/posts/users/:id" element={<AuthorPosts />} />
          <Route path="/myposts/:id" element={<Dashboard />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="/posts/:id/delete" element={<DeletePost/>} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />{" "}
      </Routes>
    </Router>
);
export default App;