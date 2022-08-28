import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function ProductInfo() {
  return (
    <Box className="left bg_shadow" flex={1} p={3}>
      <Typography variant="subtitle2" sx={{ color: "custom.dark_light" }}>
        Product Information
      </Typography>
      <Box p={3}>
        <div className="left"></div>
        <Box component="form" className="right">
          <Stack gap={2}>
            <TextField
              required
              id="standard-required"
              placeholder="Iphone XI"
              label="Product name"
              size="small"
              variant="standard"
              helperText="This field is required."
            />
          
          <Stack direction={'row'} gap={3}>
          <TextField
              required
              type={'number'}
              id="standard-required"
              placeholder="3213"
              label="Unit price"
              size="small"
              variant="standard"
              helperText="This field is required."
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              sx={{flex:1}}
            />
              <TextField
              required
              id="standard-required"
              placeholder="10"
              type="number"
              label="Unit"
              size="small"
              variant="standard"
              helperText="This field is required."
              InputProps={{
                endAdornment: <InputAdornment position="end">Unit</InputAdornment>,
              }}
              sx={{flex:1}}

            />
          </Stack>
            <TextField
              id="standard-required"
              label="Minimum purchase qty"
              size="small"
              variant="standard"
              type={'number'}
              defaultValue={1}
              helperText="This field is required."
            />
              <Stack direction={'row'} gap={3}>
              <FormControl sx={{ minWidth: 120,flex:1 }} size={"small"}>
                <InputLabel id="demo-simple-select-helper-label">
                  Brand
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={age}
                  label="brand"
                  // onChange={handleChange}
                >
                  <MenuItem value={"apple"}>Apple</MenuItem>
                  <MenuItem value={"samsung"}>Samsung</MenuItem>
                  <MenuItem value={"xiaomi"}>Xiaomi</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 120,flex:1 }} size={"small"}>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={age}
                  label="category"
                  // onChange={handleChange}
                >
                  <MenuItem value={"apple"}>Apple</MenuItem>
                  <MenuItem value={"samsung"}>Samsung</MenuItem>
                  <MenuItem value={"xiaomi"}>Xiaomi</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
