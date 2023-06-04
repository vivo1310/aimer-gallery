import { Box, Button, Container, Paper, Typography } from "@mui/material";
// import logo from "/src/assets/aimer-logo.svg";
// import InstagramIcon from "@mui/icons-material/Instagram";
import { socialMedia } from "/src/data/data";

export default function Footer() {
  return (
    <Paper
      sx={{
        // marginTop: "calc(10% + 60px)",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg" sx={{ pt: 2, pb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            // my: 1,
          }}
        >
          {socialMedia.map((item) => (
            <Button
              key={item.name}
              href={item.path}
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                color: "grey.800",
                gap: 1,
              }}
            >
              {item.icon}
              <Typography>{item.name}</Typography>
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
          }}
        >
          <Typography variant="body2">
            Địa chỉ: 13 Trần Khánh Dư (nối dài) - P.8 - Đà Lạt
          </Typography>
          <Typography variant="caption" color="grey" mt="16px">
            ©2023 Aimer.dalat
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
