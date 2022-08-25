import {
  AccountBalanceOutlined,
  AttachMoneyOutlined,
  CurrencyExchangeOutlined,
  KeyboardArrowUp,
  MoneyOutlined,
  PersonOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import "./widget.scss";
interface WidgetsProps {
  type: string;
}
export default function Widget({ type }: WidgetsProps) {
  let data;
  switch (type) {
    case "users":
      data = {
        title: "Users",
        number: 234,
        isMoney: false,
        linkText: "See all users",
        icon: <PersonOutline sx={{ alignSelf: "flex-end" }} />,
      };
      break;
    case "orders":
      data = {
        title: "Orders",
        number: 342,
        isMoney: false,
        linkText: "See all orders",
        icon: <ShoppingBagOutlined sx={{ alignSelf: "flex-end" }} />,
      };
      break;
    case "earnings":
      data = {
        title: "Earnings",
        number: 785,
        isMoney: true,
        linkText: "See net earnings",
        icon: <CurrencyExchangeOutlined sx={{ alignSelf: "flex-end" }} />,
      };
      break;
    case "balance":
      data = {
        title: "My Balance",
        number: 564,
        isMoney: true,
        linkText: "See transaction details",
        icon: <AccountBalanceOutlined sx={{ alignSelf: "flex-end" }} />,
      };
      break;

    default:
      break;
  }
  return (
    <Box flex={1}>
      <Stack
        className="widget bg_shadow"
        justifyContent="space-between"
        direction={"column"}
        p={1}
        borderRadius="8px"
        sx={{backgroundColor:"white"}}
        height={"10em"}
      >
        <Stack
          className="left"
          justifyContent={"space-between"}
          direction={"row"}
          alignItems="center"
        >
          <Typography
            variant="subtitle2"
            fontWeight={'bold'}
            sx={{ color: "custom.dark", textTransform: "uppercase" }}
          >
            {data?.title}
          </Typography>
          <Stack
            direction={"row"}
            sx={{ fontWeight: "bold", color: "custom.main" }}
          >
            <KeyboardArrowUp />
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              +12%
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems={"center"}>
          {data?.isMoney ? (
            <Stack direction={"row"}>
              <AttachMoneyOutlined sx={{ fontSize: "1em" }} />
              <Typography variant="h5" sx={{ fontWeight: 200 }}>
                {data?.number}
              </Typography>
            </Stack>
          ) : (
            <Typography variant="h5" sx={{ fontWeight: 200 }}>
              {data?.number}
            </Typography>
          )}
        </Stack>
        <Stack
          className="right"
          justifyContent={"space-between"}
          direction={"row"}
        >
          {data?.icon}
          <Button
            variant="text"
            size="small"
            sx={{
              color: "custom.light_dark",
              textTransform: "capitalize",
              fontSize: ".8em",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {data?.linkText}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
