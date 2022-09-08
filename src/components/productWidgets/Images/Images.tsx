import {
  Box, Divider, Typography
} from "@mui/material";
import { EnhancedImageStack, EnhancedSingleImageStack } from "./CustomFormElements/CustomFormElements";
export default function ProductImages() {



  return (
    <Box className="bg_shadow" flex={1} p={3}>
      <Typography variant="subtitle2" sx={{ color: "custom.dark_light" }}>
        Images
      </Typography>
      <Divider/>
      <Box p={3}>
        <Box className="right">
          <EnhancedSingleImageStack/>
          <EnhancedImageStack/>
         
        </Box>
      </Box>
    </Box>
  );
}
