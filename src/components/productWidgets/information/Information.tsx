import {
  Box,
  Divider,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
  useFormControl,
} from "@mui/material";
import { forwardRef } from "react";
import { DiscountTextFiled } from "../../../utilities/CustomFormHook";
import { BootstrapInput } from "../../../utilities/MuiCustomComponent";
import {
  MoneyFormatCustom,
  NumberFormatCustom,
} from "../../../utilities/NumberFormat";
import "./information.scss";
export default function ProductInfo({ register, control }: any) {
  const { focused } = useFormControl() || {};
  // const [discountType, setDiscountType] = useState();

  const EnhancedTypography = ({ title }: { title: string }) => (
    <Typography
      sx={{
        flex: 1,
        fontSize: ".8em",
        color: "custom.light_dark",
      }}
    >
      {title}
    </Typography>
  );
  const EnhancedTextfield = forwardRef((props: any, ref) => (
    <TextField
      ref={ref}
      id="standard-required"
      size="small"
      variant="outlined"
      color="secondary"
      {...props}
    />
  ));
  const EnhancedStack = (props: any) => {
    return (
      <Stack direction={"row"} gap={2} alignItems="center" {...props}>
        {props.children}
      </Stack>
    );
  };

  return (
    <Box className="left bg_shadow" flex={1} p={3}>
      <Typography variant="subtitle2" sx={{ color: "custom.dark_light" }}>
        Product Information
      </Typography>
      <Divider />
      <Box p={3}>
        <div className="left"></div>
        <Box className="right">
          <Stack gap={2}>
            <Box
              // size="small"
              color="secondary"
              // fullWidth
              aria-label="product information form control"
              sx={{
                flex: 4,
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "custom.light",
                  },
                },
              }}
            >
              <Stack
                direction={"column"}
                gap={3}
                aria-label="product information textfield stack"
              >
                <EnhancedStack aria-label="product name label and textfield stack">
                  <EnhancedTypography title="Product Name" />
                  <EnhancedTextfield
                    placeholder="Product name"
                    InputProps={{
                      components: (<OutlinedInput />) as any,
                    }}
                    sx={{ flex: 3 }}
                    {...register("product_name")}
                    // helperText="This field is required."
                  />
                </EnhancedStack>
                <EnhancedStack aria-label="unit price and quantity stack">
                  <EnhancedTypography title="Unit price" />

                  <EnhancedStack
                    flex={3}
                    aria-label="unit price and quantity textField"
                  >
                    <EnhancedTextfield
                      placeholder="Price per unit"
                      {...register("price_per_unit")}
                      InputProps={{
                        inputComponent: MoneyFormatCustom as any,
                        endAdornment: (
                          <InputAdornment position="end">/unit</InputAdornment>
                        ),
                        components: (<OutlinedInput />) as any,
                      }}
                      // helperText="This field is required."
                      sx={{ flex: 1 }}
                    />
                    <EnhancedTextfield
                      placeholder="Quantity"
                      {...register("quantity")}
                      InputProps={{
                        inputComponent: NumberFormatCustom as any,
                        components: (<OutlinedInput />) as any,
                      }}
                      // helperText="This field is required."
                      sx={{ flex: 1 }}
                    />
                  </EnhancedStack>
                </EnhancedStack>
                <EnhancedStack aria-label="discount and discount types stack">
                  <EnhancedTypography title="Discount" />

                  <EnhancedStack
                    flex={3}
                    aria-label="discount and discount types textField"
                  >
                    <DiscountTextFiled control={control} register={register} />

                    <FormControl sx={{ flex: 1 }}>
                      <Select
                        labelId="discount_type-simple-select-helper-label"
                        id="discount_type-simple-select-helper"
                        input={<BootstrapInput />}
                        label="Discount Type"
                        name="discount_type"
                        defaultValue={"percent"}
                        inputProps={{
                          components: (<OutlinedInput />) as any,
                        }}
                        {...register("discount_type")}
                      >
                        <MenuItem value={"percent"}>Percent</MenuItem>
                        <MenuItem value={"flat"}>Flat</MenuItem>
                      </Select>
                    </FormControl>
                  </EnhancedStack>
                </EnhancedStack>
                <EnhancedStack aria-label="brand stack">
                  <EnhancedTypography title="Brand" />

                  <EnhancedStack flex={3} aria-label="brand textField">
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      sx={{ flex: 1 }}
                      defaultValue={"apple"}
                      input={<BootstrapInput />}
                      label="Brand"
                      inputProps={{
                        components: (<OutlinedInput />) as any,
                      }}
                      // onChange={handleChange}
                      {...register("brand")}
                    >
                      <MenuItem value={"apple"}>Apple</MenuItem>
                      <MenuItem value={"samsung"}>Samsung</MenuItem>
                      <MenuItem value={"xiaomi"}>Xiaomi</MenuItem>
                    </Select>
                  </EnhancedStack>
                </EnhancedStack>
                <EnhancedStack aria-label="category stack">
                  <EnhancedTypography title="Category" />

                  <EnhancedStack flex={3} aria-label="category textField">
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      sx={{ flex: 1 }}
                      defaultValue={"smartphone"}
                      input={<BootstrapInput />}
                      label="Brand"
                      inputProps={{
                        components: (<OutlinedInput />) as any,
                      }}
                      // onChange={handleChange}
                      {...register("category")}
                    >
                      <MenuItem value={"smartphone"}>Smartphone</MenuItem>
                      <MenuItem value={"laptop"}>Laptop</MenuItem>
                      <MenuItem value={"camera"}>Camera</MenuItem>
                    </Select>
                  </EnhancedStack>
                </EnhancedStack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
