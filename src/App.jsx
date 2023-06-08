// import Header from "/src/components/Header.jsx";
import ImageGallery from "./components/ImageGallery";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Box, Container } from "@mui/material";

export default function App() {
  return (
    <div>
      <Header />
      <Container sx={{ pt: 2, pb: 2, height: "100vh" }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
