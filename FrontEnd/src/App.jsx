import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));
const SideBar = lazy(() => import("./components/SideBar"));
const Header = lazy(() => import("./components/Header"));
const Contact = lazy(() => import("./pages/Contact"))
const Footer = lazy(() => import( "./components/Footer"))
const Setting = lazy(() => import( "./pages/Setting"))
const CreateChannel = lazy(() => import("./pages/CreateChannel")) 
const Service = lazy(() => import("./provider/Service")) 
const SubcriptionManager = lazy(() => ("./pages/SubcriptionManager"))
const SubscriptionPackage = lazy(() => import( "./pages/SubscriptionPackage"))
import Loading from "./status/Loading";
import Admin from "./admin/Admin";
import Dashboard from "./admin/Dashboard";
import UserManager from "./admin/UserManager";
import Provider from "./admin/Provider";
import ServiceManager from "./admin/ServiceManager";
import FeedbackManager from "./admin/FeedbackManager";
import AdminManager from "./admin/AdminManager";
import AddCollaborators from "./admin/AddCollaborators";

function App() {
  return (
    <div className="font-titillium">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Header />
          <div className="lg:grid lg:grid-cols-[260px_auto]">
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/create" element={<CreateChannel />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/serviceManager" element={<Service />} />
              <Route path="/subPackage" element={<SubscriptionPackage />} />
              <Route
                path="/subcriptionManager"
                element={<SubcriptionManager />}
              />

              <Route path="/admin" element={<Admin />}>
                <Route path="/admin/" element={<Dashboard />} />
                <Route path="/admin/collaborators" element={<AddCollaborators />} />
                <Route path="/admin/adminManager" element={<AdminManager />} />
                <Route path="/admin/userManager" element={<UserManager />} />
                <Route path="/admin/provider" element={<Provider />} />
                <Route
                  path="/admin/serviceManager"
                  element={<ServiceManager />}
                />
                <Route
                  path="/admin/feedbackManager"
                  element={<FeedbackManager />}
                />
              </Route>
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
