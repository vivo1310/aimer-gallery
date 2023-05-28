import { Flex, Box, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex>
      <Box p="4" bg="red.400">
        Aimer logo{" "}
      </Box>

      <Spacer />

      <Box p="4" bg="green.400">
        Box 2
      </Box>
    </Flex>
  );
}
