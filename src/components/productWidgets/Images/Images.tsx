import {
  Box, Divider, Typography
} from "@mui/material";
import { EnhancedImageStack } from "../../../utilities/CustomFormHook";
export default function ProductImages({ register }: any) {



  return (
    <Box className="bg_shadow" flex={1} p={3}>
      <Typography variant="subtitle2" sx={{ color: "custom.dark_light" }}>
        Product Images
      </Typography>
      <Divider/>
      <Box p={3}>
        <Box className="right">
          <EnhancedImageStack/>
          <EnhancedImageStack/>
         
        </Box>
      </Box>
    </Box>
  );
}
