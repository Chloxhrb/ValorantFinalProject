import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AudioPlayer from "./components/AudioPlayer.jsx";
import ErrorPage from "./pages/global/ErrorPage.jsx";
import AuthPage from "./pages/global/AuthPage.jsx";
import ConnexionPage from "./pages/global/ConnexionPage.jsx";
import UserProfilPage from "./pages/users/UserProfilPage.jsx";
import AdminPage from "./pages/admin/AdminPage.jsx";
import AgentPageUser from "./pages/users/AgentPageUser.jsx";
import WeaponsPageUser from "./pages/users/WeaponsPageUser.jsx";
import AllAgents from "./pages/admin/AllAgents.jsx";
import CreatePage from "./pages/admin/CreatePage.jsx";
import AllUser from "./pages/admin/AllUser.jsx";
import AllWeapons from "./pages/admin/AllWeapons.jsx";
import AllAbility from "./pages/admin/AllAbility.jsx";
import AccueilUserConnected from "./pages/users/AccueilUserConnected.jsx";
import AccueilAdminConnected from "./pages/admin/AccueilAdminConnected.jsx";
import AgentPageAdmin from "./pages/admin/AgentPageAdmin.jsx";
import WeaponsPageAdmin from "./pages/admin/WeaponPageAdmin.jsx";
import UpdateWeapon from "./pages/admin/UpdateWeapon.jsx";
import UpdateAbility from "./pages/admin/UpdateAbility.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoutes from "./components/AdminRoutes.jsx" ;


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "agents",
    element: (
      <PrivateRoute>
        <AgentPageUser />
      </PrivateRoute>
    ),
  },
  {
    path: "agentsAd",
    element: 
    <AdminRoutes >
        <AgentPageAdmin />
        </AdminRoutes>
  },
  {
    path: "armes",
    element: (
      <PrivateRoute>
        <WeaponsPageUser />
      </PrivateRoute>
    ),
  },
  {
    path: "armesAd",
    element:
    <AdminRoutes>
        <WeaponsPageAdmin />
        </AdminRoutes>
  },
  {
    path: "connexion",
    element: <ConnexionPage />,
  },
  {
    path: "accueilusco",
    element: (
      <PrivateRoute>
        <AccueilUserConnected />
      </PrivateRoute>
    ),
  },
  {
    path: "accueiladco",
    element: 
    <AdminRoutes>
        <AccueilAdminConnected />
        </AdminRoutes>
  },
  {
    path: "inscription",
    element: <AuthPage />,
  },
  {
    path: "profil",
    element: (
      <PrivateRoute>
        <UserProfilPage />
      </PrivateRoute>
    ),
  },
  {
    path: "admin",
    element: (
    <AdminRoutes >
      <AdminPage />
    </AdminRoutes>
  )
  },
  {
    path: "/tout-les-agents",
    element: 
        <AllAgents />
  },

  {
    path: "/creer",
    element: 
    <AdminRoutes>
    <CreatePage />
    </AdminRoutes>
  },
  {
    path: "/modifieragent",
    element: 
    <AdminRoutes>
        <UpdateWeapon />
        </AdminRoutes>
  },
  {
    path: "/modifierabilites",
    element:
    <AdminRoutes> <UpdateAbility /> </AdminRoutes>,
  },
  {
    path: "/modifierarmes",
    element: <AdminRoutes><UpdateWeapon /> </AdminRoutes>,
  },
  {
    path: "/modifierabilites",
    element: <AdminRoutes><UpdateAbility /></AdminRoutes>,
  },
  {
    path: "/toutes-les-abilites",
    element: <AdminRoutes><AllAbility /></AdminRoutes>,
  },
  {
    path: "/toute-les-armes",
    element: <AdminRoutes> <AllWeapons /> </AdminRoutes>,
  },
  {
    path: "/tout-les-user",
    element: <AdminRoutes><AllUser /> </AdminRoutes>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AudioPlayer src="../src/assets/musique/instru.mp3" />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
