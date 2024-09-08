import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import {
  HandPickedBox,
  HandPickedCardStyle,
  HandPickedTypographyH2,
} from "./style";
import { useNavigate } from "react-router-dom";


const HandpickedCard = (props) => {
  const navigate = useNavigate();
  const { collection } = props;

  if (!props) {
    return <></>;
  }

  return (
    <div>
      <Card
        sx={HandPickedCardStyle} 
        onClick={() =>
            navigate(
              `/products?categoryID=${collection.id}&categoryName=${collection.title}`
            )
          }
      >
        <CardMedia
          sx={{ height: "100%" }}
          component="img"
          image={collection.imageUrl}
        />
        <Box sx={HandPickedBox}>
          <HandPickedTypographyH2 component={"h2"}>
            {collection.title}
          </HandPickedTypographyH2>
        </Box>
      </Card>
    </div>
  );
};

export default HandpickedCard;
