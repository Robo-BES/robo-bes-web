import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views

import Dashboard from "../pages/admin/Dashboard.js";
import MyPortfolios from "../pages/admin/MyPortfolios.js";
import Settings from "../pages/admin/Settings.js";
import Tables from "../pages/admin/Tables.js";

export default function Portfolios() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/portfolios/dashboard" exact component={Dashboard} />
            <Route path="/portfolios/my-portfolios" exact component={MyPortfolios} />
            <Route path="/portfolios/settings" exact component={Settings} />
            <Route path="/portfolios/tables" exact component={Tables} />
            <Redirect from="/portfolios" to="/portfolios/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
