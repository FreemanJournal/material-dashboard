import { PhotoCamera } from "@mui/icons-material";
import { useState } from "react";
import {
  Box,
  FormHelperText,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function ProductImages({ register }: any) {
  const [files, setFiles] = useState([]);
  function handleCapture(e: any) {
    console.log("capture images", e.target.files);
    setFiles(e.target.files);
  }
  return (
    <Box className="left bg_shadow" flex={1} p={3}>
      <Typography variant="subtitle2" sx={{ color: "custom.dark_light" }}>
        Product Images
      </Typography>
      <Box p={3}>
        <div className="left"></div>
        <Box component="form" className="right">
          <Stack gap={2}>
            <input
              accept="image/*"
              id="icon-button-photo"
              type="file"
              style={{ display: "none" }}
              multiple
              {...register("images")}
            />
            <label htmlFor="icon-button-photo">
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
              <FormHelperText>
                (Give 4 image of this particular product)
              </FormHelperText>
            </label>
            {files.length > 0 && (
              <img src={URL.createObjectURL(files[0])} alt="" />
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
