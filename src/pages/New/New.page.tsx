import { Box, Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Navbar from "../../components/navbar/Navbar";
import ProductImages from "../../components/productWidgets/Images/Images";
import ProductInfo from "../../components/productWidgets/information/Information";
import Sidebar from "../../components/sidebar/Sidebar";
import { FormData } from "../../utilities/FormHook";

export default function New() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<FormData>();

  function submitHandler(data: any) {
    console.log("Form Data",data);
  }
 
  return (
    <Stack className="home" direction={"row"}>
      <Sidebar />
      <Box
        flex={5}
        className="homeContainer"
        sx={{ backgroundColor: "custom.bg" }}
      >
        <Navbar />
        <Box
          className="newContainer"
          p={3}
          component="form"
          onSubmit={handleSubmit(submitHandler)}
        >
          <Typography variant="h6" sx={{ color: "custom.main" }} mb={3}>
            Add New Product
          </Typography>
          <Stack className="" direction="row" gap={3}>
            <ProductInfo register={register} control={control} />
            <ProductImages register={register} control={control} />
          </Stack>
          <Box
            sx={{
              mt: "2em",
              gap: 3,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="contained" color="info" type="submit">
              Save and Unpublish
            </Button>
            <Button variant="contained" type="submit">
              Save and Publish
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
