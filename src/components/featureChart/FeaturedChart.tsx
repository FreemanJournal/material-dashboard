import {
  AttachMoneyOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";

export default function FeaturedChart() {
  const summery = [
    {
      title: "Target",
      percent: 12,
      isPositive: true,
    },
    {
      title: "Last week",
      percent: 54,
      isPositive: false,
    },
    {
      title: "Last month",
      percent: 23,
      isPositive: true,
    },
  ];
  return (
    <Box className="bg_shadow" p={3} bgcolor="white" flex={2} borderRadius={2}>
      <Stack direction={"row"} justifyContent="space-between" className="top">
        <Typography
          variant="subtitle2"
          fontSize={"large"}
          sx={{ color: "custom.dark" }}
        >
          Total Revenue
        </Typography>
        <IconButton size="small">
          <MoreVert fontSize="small" />
        </IconButton>
      </Stack>
      <Stack className="bottom">
        <Box width={"10em"} height="10em" mx="auto" mt="2em">
          <CircularProgressbar value={70} text="70%" strokeWidth={3} />
        </Box>
        <Box textAlign={"center"}>
          <Typography>Total sales made today</Typography>
          <Stack direction={"row"} justifyContent="center">
            <AttachMoneyOutlined sx={{ fontSize: "1em" }} />
            <Typography variant="h5" sx={{ fontWeight: 200 }}>
              32424
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "custom.light_dark",fontSize:".7em" }}>
          (  Previous transactions processing.Last payments may not be included.)
          </Typography>
          <Stack direction={"row"} mt={3} justifyContent="space-between">
            {summery.map((item, i) => (
              <Box key={i}>
                <Typography
                  variant="body2"
                  mb={1}
                  sx={{ color: "custom.light_dark" }}
                >
                  {item.title}
                </Typography>
                <Stack
                  direction={"row"}
                  sx={{
                    fontWeight: "bold",
                    ...(item.isPositive ? {color:"custom.main"} : {color:"error.main"}),
                    alignItems: "center",
                  }}
                >
                  {item.isPositive ?   <KeyboardArrowUp /> :   <KeyboardArrowDown />}
                
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    +{item.percent}%
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
