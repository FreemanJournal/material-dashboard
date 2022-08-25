import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization.page";
import Home from "./pages/Home/Home.page";
import List from "./pages/List/List.page";
import New from "./pages/New/New.page";
import Single from "./pages/Single/Single.page";
import 'react-circular-progressbar/dist/styles.css';
const theme = createTheme({
  palette: {
    custom: {
      main: "#21BF73",
      light: "#B0EACD",
      dark: "#2E374F",
      contrastText: "#F4F4F6",
      light_dark: "#758283",
      bg_shadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
      // bg_shadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/auth" element={<Authorization />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userID" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productID" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
