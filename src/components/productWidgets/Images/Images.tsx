import {
  Box, Divider, Stack,
  Typography
} from "@mui/material";
import EnhancedTextField from "./EnhancedTextField";
import MiniCard from "./MiniCard";
export default function ProductImages({ register, watch }: any) {
  let watchImages = watch("images");

  function EnhancedMiniCard() {
    if (watchImages?.length > 0) {
      let allCard = [];
      for (const key in watchImages) {
        if (typeof watchImages[key] === "object") {
          console.log('image Files',watchImages[key].size)
          allCard.push(
            <MiniCard url={URL.createObjectURL(watchImages[key])} size={watchImages[key].size} key={key}/>
          );
        }
      }
      return <>{allCard}</>;
    }
    return <></>;
  }

  return (
    <Box className="bg_shadow" flex={1} p={3}>
      <Typography variant="subtitle2" sx={{ color: "custom.dark_light" }}>
        Product Images
      </Typography>
      <Divider/>
      <Box p={3}>
        <Box className="right">
          <Stack gap={2}>
            <EnhancedTextField register={register} length={watchImages?.length || 0}/>
            <Stack direction={'row'} gap={3} flexWrap="wrap">
              <EnhancedMiniCard/>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
