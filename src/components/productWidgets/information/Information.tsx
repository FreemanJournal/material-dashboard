import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
  useFormControl
} from "@mui/material";
import { useMemo } from "react";
import {
  MoneyFormatCustom,
  NumberFormatCustom
} from "../../../utilities/NumberFormat";
import "./information.scss";
export default function ProductInfo({ register }: any) {
  const { focused } = useFormControl() || {};
  function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
      if (focused) {
        return "This field is being focused";
      }

      return "Helper text";
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  return (
    <Box className="left bg_shadow" flex={1} p={3}>
      <Typography variant="subtitle2" sx={{ color: "custom.dark_light" }}>
        Product Information
      </Typography>
      <Divider />
      <Box p={3}>
        <div className="left"></div>
        <Box component="form" className="right">
          <Stack gap={2}>
            <Stack direction={"row"} gap={3} alignItems="center">
              <Typography
                sx={{ flex: 1, fontSize: ".8em", color: "custom.light_dark" }}
              >
                Product Name
              </Typography>
              <FormControl
                size="small"
                color="primary"
                fullWidth
                sx={{
                  flex: 4,
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "custom.light",
                    },
                  },
                }}
              >
                <OutlinedInput placeholder="Product name" autoFocus />
              </FormControl>
            </Stack>
            <Stack direction={"row"} gap={3} alignItems="center">
              <Typography
                sx={{ flex: 1, fontSize: ".8em", color: "custom.light_dark" }}
              >
                Unit price
              </Typography>
              <FormControl
                size="small"
                color="primary"
                fullWidth
                
                sx={{
                  flex: 4,
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "custom.light",
                    },
                  },
                }}
              >
                <OutlinedInput
                  placeholder="Unit price"
                  autoFocus
                  inputProps={{
                    inputComponent: MoneyFormatCustom as any,
                  }}
                />
              </FormControl>
            </Stack>

            <Stack direction={"row"} gap={3}>
              <TextField
                required
                id="standard-required"
                placeholder="Iphone XI"
                label="Product name"
                size="small"
                variant="standard"
                // helperText="This field is required."
                {...register("product_name")}
                sx={{ flex: 2 }}
                color={"custom"}
              />
              <TextField
                id="standard-required"
                label="Minimum purchase qty"
                size="small"
                variant="standard"
                InputProps={{
                  inputComponent: NumberFormatCustom as any,
                  endAdornment: (
                    <InputAdornment position="end">unit</InputAdornment>
                  ),
                }}
                defaultValue={1}
                // helperText="This field is required."
                sx={{ flex: 1 }}
              />
            </Stack>

            <Stack direction={"row"} gap={3}>
              <TextField
                required
                id="standard-required"
                placeholder="10"
                label="Unit price"
                size="small"
                variant="standard"
                // helperText="This field is required."
                InputProps={{
                  inputComponent: MoneyFormatCustom as any,
                }}
                sx={{ flex: 2 }}
                {...register("unit_price")}
              />
              <TextField
                required
                id="standard-required"
                placeholder="10"
                label="Unit"
                size="small"
                variant="standard"
                // helperText="This field is required."
                InputProps={{
                  inputComponent: NumberFormatCustom as any,
                  endAdornment: (
                    <InputAdornment position="end">Unit</InputAdornment>
                  ),
                }}
                sx={{ flex: 1 }}
                {...register("total_unit")}
              />
            </Stack>
            <Stack direction={"row"} gap={3}>
              <TextField
                id="standard-required"
                placeholder="0"
                label="Discount"
                size="small"
                variant="standard"
                defaultValue={0}
                sx={{ flex: 2 }}
                InputProps={{
                  inputComponent: NumberFormatCustom as any,
                }}
                {...register("discount")}
              />
              <FormControl
                sx={{ minWidth: 120, flex: 1 }}
                size={"small"}
                variant="standard"
              >
                <InputLabel id="demo-simple-select-helper-label">
                  Discount Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  defaultValue={"percent"}
                  // value={age}
                  label="Discount Type"
                  // onChange={handleChange}
                  {...register("discount_type")}
                >
                  <MenuItem value={"percent"}>Percent</MenuItem>
                  <MenuItem value={"flat"}>Flat</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction={"row"} gap={3}>
              <FormControl
                sx={{ minWidth: 120, flex: 1 }}
                size={"small"}
                variant="standard"
              >
                <InputLabel id="demo-simple-select-helper-label">
                  Brand
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  defaultValue={"apple"}
                  // value={age}
                  label="brand"
                  // onChange={handleChange}
                >
                  <MenuItem value={"apple"}>Apple</MenuItem>
                  <MenuItem value={"samsung"}>Samsung</MenuItem>
                  <MenuItem value={"xiaomi"}>Xiaomi</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{ minWidth: 120, flex: 1 }}
                size={"small"}
                variant="standard"
              >
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  defaultValue={"apple"}
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
