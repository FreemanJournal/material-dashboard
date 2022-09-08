import { InputAdornment, OutlinedInput, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { forwardRef } from "react";
import { useWatch } from "react-hook-form";
import { useAppSelector } from "../../../../redux/hooks";
import { DiscountFormatCustom, MoneyFormatCustom } from "../../../../utilities/NumberFormat";
import EnhancedTextField from "./EnhancedTextField";
import MiniCard from "./MiniCard";
import MultipleImageField from "./MultipleImageField";
import SingleImageField from "./SingleImageField";

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
              multiple={true}

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
      <MultipleImageField
        length={sliderImages?.length || 0}
      />
      <Stack direction={"row"} gap={3} flexWrap="wrap">
        <EnhancedMiniCard />
      </Stack>
    </Stack>
  ); // only re-render at the custom hook level, when firstName changes
}
export function EnhancedSingleImageStack() {
 
  const thumbImages = useAppSelector<any[]>((state)=>state.products.thumbImg)

  function EnhancedMiniCard() {
    if (thumbImages?.length > 0) {
      let allCard: any = [];
      for (const key in thumbImages) {
        if (typeof thumbImages[key] === "object") {
          allCard.push(
            <MiniCard
              url={URL.createObjectURL(thumbImages[key])}
              size={thumbImages[key].size}
              key={key}
              cardId={key}
              multiple={false}
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
      <SingleImageField
        length={thumbImages?.length || 0}
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
    name: "discount_type", 
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
  ); 
}
