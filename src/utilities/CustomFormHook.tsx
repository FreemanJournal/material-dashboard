import { InputAdornment, OutlinedInput, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Control, useWatch } from "react-hook-form";
import EnhancedTextField from "../components/productWidgets/Images/EnhancedTextField";
import MiniCard from "../components/productWidgets/Images/MiniCard";
import { DiscountFormatCustom, MoneyFormatCustom } from "./NumberFormat";
import { useState, useEffect } from "react";
export interface FormData {
  product_name: string;
  price_per_unit: string;
  discount: string;
  discount_type: string;
  images: object;
  brand: string;
  category: string;
}

export function EnhancedImageStack({ control, register, setValue }: any) {
  const [myTruth, setMyTruth] = useState(false);
  useEffect(() => {}, [myTruth]);

  const watchImages = useWatch({
    control,
    name: "images", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: [], // default value before the render
  });

  function generateCards(allCard: any, deleteHandler: any) {
    for (const key in watchImages) {
      if (typeof watchImages[key] === "object") {
        allCard.push(
          <MiniCard
            url={URL.createObjectURL(watchImages[key])}
            size={watchImages[key].size}
            key={key}
            cardId={key}
            deleteHandler={deleteHandler}
          />
        );
      }
    }
  }

  function EnhancedMiniCard() {
    if (watchImages?.length > 0) {
      const files = Array.from(watchImages);
      let allCard: any = [];
      const deleteHandler = (key: string) => {
        console.log('deleteHandler',key)
        //  watchImages[key] = 0
        // setValue("images", watchImages);
        allCard.splice(+key, 1);
        // setMyTruth((s) => !s);
        // console.log("watchAfter files", files);
        // console.log("watchAfter watchImages", watchImages);
      };

  

      for (const key in watchImages) {
        if (typeof watchImages[key] === "object") {
          allCard.push(
            <MiniCard
              url={URL.createObjectURL(watchImages[key])}
              size={watchImages[key].size}
              key={key}
              cardId={key}
              deleteHandler={deleteHandler}
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
        register={register}
        length={watchImages?.length || 0}
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
