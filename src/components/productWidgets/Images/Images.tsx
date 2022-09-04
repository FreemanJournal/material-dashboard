import {
  Box, Divider, Typography
} from "@mui/material";
import { EnhancedImageStack } from "../../../utilities/CustomFormHook";
export default function ProductImages({ register, control,setValue }: any) {



  return (
    <Box className="bg_shadow" flex={1} p={3}>
      <Typography variant="subtitle2" sx={{ color: "custom.dark_light" }}>
        Product Images
      </Typography>
      <Divider/>
      <Box p={3}>
        <Box className="right">
          <EnhancedImageStack control={control} register={register} setValue={setValue}/>
         
        </Box>
      </Box>
    </Box>
  );
}
