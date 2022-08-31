import {
  Box, Divider, Stack,
  Typography
} from "@mui/material";
import { EnhancedImageStack } from "../../../utilities/FormHook";
import EnhancedTextField from "./EnhancedTextField";
import MiniCard from "./MiniCard";
export default function ProductImages({ register, control }: any) {



  return (
    <Box className="bg_shadow" flex={1} p={3}>
      <Typography variant="subtitle2" sx={{ color: "custom.dark_light" }}>
        Product Images
      </Typography>
      <Divider/>
      <Box p={3}>
        <Box className="right">
          <EnhancedImageStack control={control} register={register}/>
          {/* <Stack gap={2}>
            <EnhancedTextField register={register} length={watchImages?.length || 0}/>
            <Stack direction={'row'} gap={3} flexWrap="wrap">
              <EnhancedMiniCard/>
            </Stack>
          </Stack> */}
        </Box>
      </Box>
    </Box>
  );
}
