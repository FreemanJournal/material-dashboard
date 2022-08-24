import {
  Dashboard, DirectionsRunSharp,
  GroupSharp,
  LocalMallSharp,
  LocalShippingSharp, LoginSharp,
  LogoutSharp, MonitorHeartSharp,
  NotificationsSharp,
  PersonSharp,
  SettingsSuggestSharp,
  StorefrontSharp
} from "@mui/icons-material";
import "./sidebar.scss";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <p className="logo">gadget ecommerce</p>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <Dashboard className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <GroupSharp className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <StorefrontSharp className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <LocalMallSharp className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingSharp className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">Use full</p>
          <li>
            <MonitorHeartSharp className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsSharp className="icon"/>
            <span>Notifications</span>
          </li>

          <p className="title">Service</p>
          <li>
            <DirectionsRunSharp className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <LoginSharp className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsSuggestSharp className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <PersonSharp className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutSharp className="icon"/>
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
