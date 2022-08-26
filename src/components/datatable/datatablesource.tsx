import { CheckCircle, Error } from "@mui/icons-material";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

export const userColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 2,
    renderCell: (params: GridRenderCellParams) => {
      return <Typography variant="subtitle2">{params.row.id}</Typography>;
    },
  },
  {
    field: "username",
    headerName: "User",
    flex: 2,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Stack
          direction={"row"}
          gap={2}
          alignItems="center"
          className="cellWithImg"
        >
          <Avatar
            src="https://source.unsplash.com/random"
            className="cellImg"
            alt=""
          />
          <Typography variant="subtitle2">{params.row.username}</Typography>
        </Stack>
      );
    },
  },
  { field: "email", headerName: "Email", flex: 2 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: `${
              params.row.status === "Active" ? "custom.main" : "error.light"
            }`,
          }}
        >
          {params.row.status}
        </Typography>
      );
    },
  },
  { field: "age", headerName: "Age", flex: 0.5 },
];

export const userRows = [
  {
    id: "63083bb2fc13ae4c1d0006b8",
    username: "Tomatillo",
    img: "http://dummyimage.com/250x100.png/cc0000/ffffff",
    email: "cflaws0@dyndns.org",
    status: "Inactive",
    age: 62,
  },
  {
    id: "63083bb2fc13ae4c1d0006b9",
    username: "Coffee - Almond Amaretto",
    img: "http://dummyimage.com/187x100.png/dddddd/000000",
    email: "isnape1@ca.gov",
    status: "Active",
    age: 40,
  },
  {
    id: "63083bb2fc13ae4c1d0006ba",
    username: "Oven Mitts 17 Inch",
    img: "http://dummyimage.com/236x100.png/5fa2dd/ffffff",
    email: "kleavry2@reddit.com",
    status: "Inactive",
    age: 72,
  },
  {
    id: "63083bb2fc13ae4c1d0006bb",
    username: "Cheese - Shred Cheddar / Mozza",
    img: "http://dummyimage.com/108x100.png/ff4444/ffffff",
    email: "vpolo3@goodreads.com",
    status: "Active",
    age: 24,
  },
  {
    id: "63083bb2fc13ae4c1d0006bc",
    username: "Wine - Casablanca Valley",
    img: "http://dummyimage.com/154x100.png/dddddd/000000",
    email: "sbellew4@archive.org",
    status: "Active",
    age: 27,
  },
  {
    id: "63083bb2fc13ae4c1d0006bd",
    username: "Peppercorns - Pink",
    img: "http://dummyimage.com/190x100.png/cc0000/ffffff",
    email: "mberrey5@fda.gov",
    status: "Active",
    age: 94,
  },
  {
    id: "63083bb2fc13ae4c1d0006be",
    username: "Beans - Black Bean, Dry",
    img: "http://dummyimage.com/193x100.png/5fa2dd/ffffff",
    email: "ccopin6@360.cn",
    status: "Active",
    age: 85,
  },
  {
    id: "63083bb2fc13ae4c1d0006bf",
    username: "Bread - Triangle White",
    img: "http://dummyimage.com/211x100.png/cc0000/ffffff",
    email: "gflores7@mozilla.com",
    status: "Active",
    age: 27,
  },
  {
    id: "63083bb2fc13ae4c1d0006c0",
    username: "Flower - Potmums",
    img: "http://dummyimage.com/232x100.png/dddddd/000000",
    email: "vdecruce8@ox.ac.uk",
    status: "Active",
    age: 82,
  },
  {
    id: "63083bb2fc13ae4c1d0006c1",
    username: "Wine - Barbera Alba Doc 2001",
    img: "http://dummyimage.com/107x100.png/cc0000/ffffff",
    email: "rdagless9@storify.com",
    status: "Inactive",
    age: 66,
  },
];
