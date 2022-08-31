import { createTheme, ThemeProvider,CssBaseline } from "@mui/material";
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
    primary: {
      main: "#21BF73",
      light: "#B0EACD",
      dark: "#2E374F",
      contrastText: "#F4F4F6",
    },
    secondary: {
      main: "#B0EACD",
      light: "#B0EACD",
      dark: "#2E374F",
      contrastText: "#F4F4F6",
  
    },
    custom: {
      main: "#21BF73",
      light: "#B0EACD",
      dark: "#2E374F",
      contrastText: "#F4F4F6",
      light_dark: "#758283",
      bg:"#f0f8ff"
    },
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline/>
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
            <Route path="orders">
              <Route index element={<List />} />
              <Route path=":orderID" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
