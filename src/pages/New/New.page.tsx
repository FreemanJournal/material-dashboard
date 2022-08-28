import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Navbar from "../../components/navbar/Navbar";
import ProductImages from "../../components/productWidgets/Images";
import ProductInfo from "../../components/productWidgets/Information";
import Sidebar from "../../components/sidebar/Sidebar";
interface FormData {
  images: string;
}
export default function New() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <Stack className="home" direction={"row"}>
      <Sidebar />
      <Box
        flex={5}
        className="homeContainer"
        sx={{ backgroundColor: "custom.bg" }}
      >
        <Navbar />
        <Box className="newContainer" p={3}>
          <Typography variant="h6" sx={{ color: "custom.main" }} mb={3}>
            Add New Product
          </Typography>
          <Stack className="" direction="row" gap={3}>
            <ProductInfo />
            <ProductImages register={register} />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
