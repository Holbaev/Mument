import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

export const routes = [
  { path: "/", component: <MainPage /> },
  { path: "/login/", component: <LoginPage /> },
  { path: "/register/", component: <RegisterPage /> },
  { path: "/profile/", component: <ProfilePage /> },
];
