import { Clear } from "@mui/icons-material";
import {
  alpha,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import fileSize from "filesize";
import { useAppDispatch } from "../../../redux/hooks";
import { deleteImage } from "../../../redux/state/product.slice";
import "./miniCard.scss";
export default function MiniCard({
  url,
  size,
  cardId,
}: {
  url: string;
  size: number;
  cardId: string;
}) {
  const file = fileSize.partial({ base: 2, standard: "jedec" });
  const dispatch = useAppDispatch();

  return (
    <Card
      sx={{ width: 100, height: 100, position: "relative" }}
      className="productMiniCard"
    >
      <div
        style={{
          position: "absolute",
          padding: 0,
          margin: 0,
          inset: "0 0 auto auto",
          // transform: "translate(-50%,-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          aria-label="delete"
          size="small"
          className="deleteIcon"
          sx={{
            color: "error.main",
            backgroundColor: "aliceblue",
          }}
          onClick={() => dispatch(deleteImage(cardId))}
        >
          <Clear fontSize="small" />
        </IconButton>
      </div>
      <CardMedia
        component="img"
        height="50"
        image={url || "https://source.unsplash.com/random"}
        alt="Paella dish"
      ></CardMedia>
      <CardContent sx={{ px: 0 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: ".7em",
            fontWeight: "bold",
            display: "flex",
            gap: "2",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span> Size:</span>
          <span>{file(size)}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
