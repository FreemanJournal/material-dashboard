import {
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
export default function EnhancedTextField({ register,length }: any) {
  return (
    <Stack direction={"row"} alignItems="center">
      <Typography flex="3"> Image</Typography>
      <input
        accept="image/*"
        id="icon-product-thumbnail-photo"
        type="file"
        style={{ display: "none" }}
        multiple
        {...register("images")}
      />
      <Box
        
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          flex: 7,
          border: "2px solid rgba(0,0,0,0.1)",
          // borderColor: "custom.main",
        }}
      >
        <Button
          variant="text"
          sx={{ color: "custom.dark", border: 0, outline: 0 }}
          disableElevation
          component="label"
          htmlFor="icon-product-thumbnail-photo"
        >
          Browse
        </Button>
        <Divider orientation="vertical" flexItem />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value={`${length} photo selected`}
          inputProps={{ "aria-label": "selected image" }}
          disabled
        />
      </Box>
    </Stack>
  );
}
