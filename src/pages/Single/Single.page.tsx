import { Edit } from "@mui/icons-material";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";

export default function Single() {
  return (
    <Stack className="home" direction={"row"}>
      <Sidebar />
      <Box
        flex={5}
        className="homeContainer"
        sx={{ backgroundColor: "custom.bg" }}
      >
        <Navbar />
        <Box className="singleContainer" p={3}>
          <Stack className="top" direction={"row"} gap={3}>
            <Box className="left bg_shadow" flex={4} p={2}>
              <Stack justifyContent={"space-between"} direction="row">
                <Typography
                  variant="subtitle2"
                  sx={{ color: "custom.light_dark" }}
                >
                  Personal Info
                </Typography>
                <IconButton>
                  <Edit />
                </IconButton>
              </Stack>

              <Stack direction={"row"} gap={2} mt={3}>
                <Box className="top_profile">
                  <Avatar
                    alt="User image"
                    src="https://source.unsplash.com/random"
                    sx={{ width: "7em", height: "7em", mx: "auto" }}
                  />
                  <Stack mt={2}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      sx={{ color: "custom.main" }}
                    >
                      Shakil Mahmud
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={".8em"}
                      sx={{ color: "custom.light_dark" }}
                    >
                      Software Developer
                    </Typography>
                  </Stack>
                </Box>

                <Stack
                  className="bottom_profile"
                  gap={2}
                  textAlign="center"
                  justifyContent={"center"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={"bold"}
                    sx={{
                      fontSize: ".8em",
                      color: "custom.light_dark",
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <span>Email:</span> <span>shakil.admin@gmail.com</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={"bold"}
                    sx={{
                      fontSize: ".8em",
                      color: "custom.light_dark",
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <span>Country:</span> <span>Bangladesh</span>{" "}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={"bold"}
                    sx={{
                      fontSize: ".8em",
                      color: "custom.light_dark",
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <span>Phone:</span> <span>+088019227386</span>{" "}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={"bold"}
                    sx={{
                      fontSize: ".8em",
                      color: "custom.light_dark",
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <span>Address: </span>{" "}
                    <span>Purbodhola,Netrokona,Mymensingh-2410</span>
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Box className="right bg_shadow" flex={6} p={2}>
              <Typography
                variant="subtitle2"
                sx={{ color: "custom.light_dark" }}
              >
                Last 6 months (spending)
              </Typography>
              <Box className="charts" mt={3} position={"relative"}>
                <Chart title={"Spending"} height={30} />
              </Box>
            </Box>
          </Stack>
          <Box className="bottom" mt={3}>
            <Tables />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
