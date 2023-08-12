import { Box, Typography } from "@mui/material";

export default function ContactDetails({ alignItems }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: { alignItems },
        display: "flex",
        flexDirection: "column",
        mt: 1,
      }}
    >
      <Typography variant="body2">
        Address: 13 Tran Khanh Du, ward 8, Da Lat
      </Typography>
      <Typography variant="body2">
        Contact:{" "}
        <Typography
          variant="body2"
          component="a"
          //   sx={{ textDecoration: "none" }}
          color="text.primary"
          href="tel:+84933842420"
        >
          +84 933 842 420
        </Typography>
      </Typography>
    </Box>
  );
}
