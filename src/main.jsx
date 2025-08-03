import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout, PostCard, PostForm, Signup } from "./components"
import LoginComponent from "./pages/LoginComponent.jsx";
import { SignUpComponent } from "./pages/SignUpComponent.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPosts from "./pages/AddPosts.jsx";
import { Post } from "./pages/Post.jsx";
import EditPost from "./pages/EditPost.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginComponent />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUpComponent />
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            <AddPosts />
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: <Post />

      },
      {
        path: '/edit-post/:slug',
        element: <EditPost />

      }
    ]
  },

])

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

);
