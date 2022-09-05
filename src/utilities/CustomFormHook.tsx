import { InputAdornment, OutlinedInput, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useWatch } from "react-hook-form";
import EnhancedTextField from "../components/productWidgets/Images/EnhancedTextField";
import MiniCard from "../components/productWidgets/Images/MiniCard";
import { useAppSelector } from "../redux/hooks";
import { DiscountFormatCustom, MoneyFormatCustom } from "./NumberFormat";
export interface FormData {
  product_name: string;
  price_per_unit: string;
  discount: string;
  discount_type: string;
  images: object;
  brand: string;
  category: string;
}

export function EnhancedImageStack() {
 
  const sliderImages = useAppSelector<any[]>((state)=>state.products.images)

  function EnhancedMiniCard() {
    if (sliderImages?.length > 0) {
      let allCard: any = [];
      for (const key in sliderImages) {
        if (typeof sliderImages[key] === "object") {
          allCard.push(
            <MiniCard
              url={URL.createObjectURL(sliderImages[key])}
              size={sliderImages[key].size}
              key={key}
              cardId={key}
            />
          );
        }
      }
    
      return <>{allCard}</>;
    }
    return <></>;
  }

  return (
    <Stack gap={2}>
      <EnhancedTextField
        length={sliderImages?.length || 0}
      />
      <Stack direction={"row"} gap={3} flexWrap="wrap">
        <EnhancedMiniCard />
      </Stack>
    </Stack>
  ); // only re-render at the custom hook level, when firstName changes
}

export function DiscountTextFiled({ control, register }: any) {
  const discountType = useWatch({
    control,
    name: "discount_type", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: "percent", // default value before the render
  });

  return (
    <TextField
      id="standard-required"
      size="small"
      variant="outlined"
      color="secondary"
      placeholder="Discount"
      {...register("discount")}
      InputProps={{
        inputComponent:
          discountType !== "flat"
            ? (DiscountFormatCustom as any)
            : (MoneyFormatCustom as any),
        endAdornment: (
          <InputAdornment position="end">
            {discountType !== "flat" ? "%" : ""}
          </InputAdornment>
        ),
        components: (<OutlinedInput />) as any,
      }}
      // helperText="This field is required."
      sx={{ flex: 1 }}
    />
  ); // only re-render at the custom hook level, when firstName changes
}
