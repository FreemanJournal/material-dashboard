import { CheckCircle, Error } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface TransactionsData {
  id: { $oid: string };
  product: string;
  img: string;
  customer: string;
  date: string;
  amount: number;
  method: string;
  status: "Approved" | "Pending";
}

export default function Tables() {
  const [data, setData] = useState<TransactionsData[] | []>([]);

  useEffect(() => {
    axios("/data/transactions.json").then(({ data }) => setData(data));
  }, []);
  return (
    <Box
      className="bg_shadow"
      p={3}
      sx={{ background: "white", borderRadius: "8px" }}
    >
      <Typography
        variant="subtitle2"
        fontSize={"large"}
        sx={{ color: "custom.dark" }}
      >
        Transaction History (Last 6 months)
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: "3em" ,maxHeight:"30em"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell>Tracking ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id.$oid}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ display: "flex", gap: "1em", alignItems: "center" }}
                >
                  <Avatar
                    src="https://source.unsplash.com/random"
                    sx={{ width: 36, height: 36 }}
                  />
                  <Typography variant="subtitle2"> {row.product}</Typography>
                </TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell>
                  {row.status === "Approved" ? (
                    <Button
                      variant="contained"
                      endIcon={<CheckCircle />}
                      sx={{
                        backgroundColor: "custom.main",
                        "&.MuiButton-root:hover": {
                          backgroundColor: "custom.main",
                        },
                      }}
                    >
                      {row.status}
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      endIcon={<Error />}
                      sx={{
                        backgroundColor: "warning.light",
                        "&.MuiButton-root:hover": {
                          backgroundColor: "warning.dark",
                        },
                      }}
                    >
                      {row.status}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
