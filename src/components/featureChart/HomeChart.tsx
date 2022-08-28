import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Chart from "../chart/Chart";

export default function HomeChart() {
  return (
    <Box className="bg_shadow" p={3} bgcolor="white" flex={5} borderRadius={2}>
      <Stack direction={"row"} justifyContent="space-between" className="top">
        <Typography
          variant="subtitle2"
          fontSize={"large"}
          sx={{ color: "custom.dark" }}
        >
          Income(Last 6 month)
        </Typography>
        <IconButton size="small">
          <MoreVert fontSize="small" />
        </IconButton>
      </Stack>
      <Stack className="bottom">
        <Chart title={"Income"} height={50}/>
      </Stack>
      
    </Box>
  );
}
