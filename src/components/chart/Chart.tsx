import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {faker} from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Total Income",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export default function Chart() {
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
        <Line options={options} data={data} />;
      </Stack>
      
    </Box>
  );
}
