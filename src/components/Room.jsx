import { Typography } from "@mui/material";
import ImageGallery from "./ImageGallery";

export default function Room({ folderName, roomName }) {
  return (
    <>
      <Typography variant="h4">{roomName}</Typography>
      <Typography variant="h6">
        Aimer.dalat has stopped operating. Thanks for all of your love and
        support thus far!
      </Typography>
      {/* Temporarily suspend to avoid billing */}
      {/* <ImageGallery folderName={folderName} /> */}
    </>
  );
}
