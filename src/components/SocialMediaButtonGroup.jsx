import { Box, Button, Typography } from "@mui/material";
import { socialMedia } from "/src/data/data";

export default function SocialMediaButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          </Button>
        ))}
      </Box>
      <Typography variant="caption">@Aimer.dalat</Typography>
    </Box>
  );
}
