import { Box, Stack } from "@mui/material";
import DataTable from "../../components/datatable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function List() {
  return (
    <Stack className="home" direction={"row"}>
      <Sidebar />
      <Box
        flex={5}
        className="homeContainer"
        sx={{ backgroundColor: "custom.bg" }}
      >
        <Navbar />

        <Box className="listContainer" p={3}>
          <DataTable />
        </Box>
      </Box>
    </Stack>
  );
}
