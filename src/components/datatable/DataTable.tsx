import { Delete, Edit, PanoramaFishEye, VisibilityOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { userColumns, userRows } from "./datatablesource";

export default function DataTable() {
  const navigate = useNavigate();
  function deleteHandler(id: string) {
    console.log("deleteID", id);
  }
  function viewHandler(id: string) {
    navigate(`/users/${id}`)
  }
  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      hideSortIcons: true,
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",

      renderCell: (params: GridRenderCellParams) => {
        return (
          <Stack direction={"row"} gap={2} className="cellAction">
            <IconButton
              aria-label="View the item"
              title="View"
              sx={{
                color: "custom.main",
                "&.MuiButton-root:hover": {
                  color: "custom.light",
                },
              }}
              onClick={() => viewHandler(params.row.id)}
            >
              <VisibilityOutlined />
            </IconButton>
            <IconButton
                aria-label="delete the item"
                title="Delete"
              sx={{
                color: "error.main",
                "&.MuiButton-root:hover": {
                  color: "error.light",
                },
              }}
              onClick={() => deleteHandler(params.row.id)}
            >
              <Delete />
            </IconButton>
          </Stack>
        );
      },
    },
  ];
  //   const [userRows, setUserRows] = useState([]);
  //   useEffect(() => {
  //     axios("/data/users.json").then(({ data }) => setUserRows(data));
  //   }, []);
  //   console.log('userRows',userRows)
  return (
    <Box style={{ width: "100%" }} sx={{ background: "white" }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        autoHeight
        editMode="row"
        sx={{
          "& .MuiDataGrid-columnHeader:focus,& .MuiDataGrid-cell:focus": {
            // border:0,
            outline: 0,
          },
        }}
      />
    </Box>
  );
}
