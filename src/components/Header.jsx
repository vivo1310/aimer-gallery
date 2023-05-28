import { Stack, Box, Container, Link } from "@chakra-ui/react";
import logo from "/src/assets/aimer-logo.svg";
import RoomMenu from "./RoomMenu";

export default function Header() {
  return (
    <Box bg="gray.100" color="gray.700">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", sm: "row" }}
        spacing={4}
        justify={{ base: "center", sm: "space-between" }}
        align={{ base: "center", sm: "center" }}
      >
        <Link href="/">Aimer.dalat</Link>
        <RoomMenu />
        {/* <Image src={logo} height="sm" width="sm" /> */}
      </Container>
    </Box>
  );
}
