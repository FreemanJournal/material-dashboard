import {
  Dashboard,
  DirectionsRunSharp,
  GroupSharp,
  LocalMallSharp,
  LocalShippingSharp,
  LoginSharp,
  LogoutSharp,
  MonitorHeartSharp,
  NotificationsSharp,
  PersonSharp,
  SettingsSuggestSharp,
  StorefrontSharp,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="top">
        <p className="logo">gadget ecommerce</p>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li onClick={() => navigate("/")}>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li onClick={() => navigate("/users")}>
            <GroupSharp className="icon" />
            <span>Users</span>
          </li>
          <li onClick={() => navigate("/products")}>
            <StorefrontSharp className="icon" />
            <span>Products</span>
          </li>
          <li onClick={() => navigate("/orders")}>
            <LocalMallSharp className="icon" />
            <span>Orders</span>
          </li>
          <li onClick={() => navigate("/")}>
            <LocalShippingSharp className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Use full</p>
          <li onClick={() => navigate("/")}>
            <MonitorHeartSharp className="icon" />
            <span>Stats</span>
          </li>
          <li onClick={() => navigate("/")}>
            <NotificationsSharp className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">Service</p>
          <li onClick={() => navigate("/")}>
            <DirectionsRunSharp className="icon" />
            <span>System Health</span>
          </li>
          <li onClick={() => navigate("/")}>
            <LoginSharp className="icon" />
            <span>Logs</span>
          </li>
          <li onClick={() => navigate("/")}>
            <SettingsSuggestSharp className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li onClick={() => navigate("/")}>
            <PersonSharp className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={() => navigate("/")}>
            <LogoutSharp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}
