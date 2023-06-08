import { Container, Box, Typography } from "@mui/material";
import ImageGallery from "./ImageGallery";

export default function Room({ folderName, roomName }) {
  return (
    <>
      <Typography variant="h4">{roomName}</Typography>
      <ImageGallery folderName={folderName} />
    </>
  );
}
