import Dashboard from "layouts/dashboard";
import Dashboard2 from "layouts/dashboard2";
import Dashboard3 from "layouts/dashboard3";
import Dashboard4 from "layouts/dashboard4";
import Tables from "layouts/tables";
//import Billing from "layouts/billing";
//import RTL from "layouts/rtl";
//import Notifications from "layouts/notifications";
//import Profile from "layouts/profile";
//import SignIn from "layouts/authentication/sign-in";
//import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Dashboard2",
    key: "dashboard2",
    icon: <Icon fontSize="small">dashboard2</Icon>,
    route: "/dashboard2",
    component: <Dashboard2 />,
  },
  {
    type: "collapse",
    name: "Dashboard3",
    key: "dashboard3",
    icon: <Icon fontSize="small">dashboard3</Icon>,
    route: "/dashboard3",
    component: <Dashboard3 />,
  },
  {
    type: "collapse",
    name: "Dashboard4",
    key: "dashboard4",
    icon: <Icon fontSize="small">dashboard4</Icon>,
    route: "/dashboard4",
    component: <Dashboard4 />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
//  {
//    type: "collapse",
//    name: "Billing",
//    key: "billing",
//    icon: <Icon fontSize="small">receipt_long</Icon>,
//    route: "/billing",
//    component: <Billing />,
//  },
//  {
//    type: "collapse",
//    name: "RTL",
//    key: "rtl",
//    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
//    route: "/rtl",
//    component: <RTL />,
//  },
//  {
//    type: "collapse",
//    name: "Notifications",
//    key: "notifications",
//    icon: <Icon fontSize="small">notifications</Icon>,
//    route: "/notifications",
//    component: <Notifications />,
//  },
//  {
//    type: "collapse",
//    name: "Profile",
//    key: "profile",
//    icon: <Icon fontSize="small">person</Icon>,
//    route: "/profile",
//    component: <Profile />,
//  },
//  {
//    type: "collapse",
//    name: "Sign In",
//    key: "sign-in",
//    icon: <Icon fontSize="small">login</Icon>,
//    route: "/authentication/sign-in",
//    component: <SignIn />,
//  },
//  {
//    type: "collapse",
//    name: "Sign Up",
//    key: "sign-up",
//    icon: <Icon fontSize="small">assignment</Icon>,
//    route: "/authentication/sign-up",
//    component: <SignUp />,
//  },
];

export default routes;
