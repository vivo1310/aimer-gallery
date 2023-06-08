import { Box, Button, Container, Paper, Typography } from "@mui/material";
// import logo from "/src/assets/aimer-logo.svg";
// import InstagramIcon from "@mui/icons-material/Instagram";
import { socialMedia } from "/src/data/data";
import SocialMediaButtonGroup from "./SocialMediaButtonGroup";
import ContactDetails from "./ContactDetails";

export default function Footer() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        pb: 1,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container
        maxWidth="sm"
        sx={{ pt: 2, pb: 1, display: { xs: "block", sm: "none" } }}
      >
        <SocialMediaButtonGroup />
        <ContactDetails alignItems="center" />
      </Container>
      <Container
        maxWidth="md"
        sx={{ pt: 2, pb: 1, display: { xs: "none", sm: "flex" } }}
      >
        <ContactDetails alignItems="flex-start" />
        <SocialMediaButtonGroup />
      </Container>
      <Typography variant="caption" color="grey">
        ©2023 Aimer.dalat
      </Typography>
    </Paper>
  );
}
