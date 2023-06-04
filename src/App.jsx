// import Header from "/src/components/Header.jsx";
import ImageGallery from "./components/ImageGallery";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

export default function App() {
  return (
    <div>
      <Header />
      <Box
        sx={{
          // margin: "auto",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <Outlet />
      </Box>
      {/* <ImageGallery folderName="living-area" /> */}
      {/* TODO: change this to another folder? */}
      <Footer />
    </div>
  );
}
