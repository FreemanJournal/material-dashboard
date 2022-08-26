import { Box, Stack, Typography } from "@mui/material";
import Chart from "../../components/chart/Chart";
import FeaturedChart from "../../components/featureChart/FeaturedChart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TransactionsHistory from "../../components/table/Table";
import Widget from "../../components/widgets/Widget";
import "./home.scss";
export default function Home() {
  // TODO:Implement Authentication here
  // FIXME: Set up proper google authentication

  return (
    <Stack className="home" direction={"row"}>
      <Sidebar />
      <Box flex={5} className="homeContainer" sx={{backgroundColor:"custom.bg"}}>
        <Navbar />
        <Stack className="widgets" direction="row" gap={3} p={4}>
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </Stack>
        <Stack className="charts" direction={'row'} p={3} gap={3}>
          <FeaturedChart />
          <Chart />
        </Stack>
        <Stack className="listContainer" p={3}>
          <TransactionsHistory/>
      </Stack>
      </Box>
    </Stack>
  );
}
