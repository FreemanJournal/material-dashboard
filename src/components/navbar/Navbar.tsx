import {
  DarkModeOutlined, FullscreenOutlined,
  LanguageOutlined, MenuOutlined, MessageOutlined, NotificationsOutlined,
  Search
} from "@mui/icons-material";
import { Avatar, Badge, IconButton, Stack, Typography } from "@mui/material";
import "./navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Type & enter..." />
          <p className="icon">
            {" "}
            <Search />
          </p>
        </div>
        <Stack className="items" gap={2} direction={"row"}>
          <IconButton
            aria-label="language change"
            title="Language"
            sx={{ borderRadius: "0px" }}
          >
            <LanguageOutlined />
            <Typography>English</Typography>
          </IconButton>
          <IconButton aria-label="dark mode" title="Dark mode">
            <DarkModeOutlined />
          </IconButton>
          <IconButton aria-label="full screen" title="Full Screen">
            <FullscreenOutlined />
          </IconButton>
          <IconButton aria-label="notification" title="Notifications">
            <Badge badgeContent={4} color="error">
              <NotificationsOutlined color="action" />
            </Badge>
          </IconButton>
          <IconButton aria-label="message" title="Message">
            <Badge badgeContent={4} color="error">
              <MessageOutlined color="action" />
            </Badge>
          </IconButton>
          <IconButton aria-label="menu burger menu" title="Menu">
            <MenuOutlined />
          </IconButton>
          <Avatar
            src="https://source.unsplash.com/random"
            sx={{ width: 36, height: 36 }}
          />
        </Stack>
      </div>
    </div>
  );
}
