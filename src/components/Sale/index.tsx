import { Box, Text } from "@chakra-ui/react";

export default function Sale() {
  return (
    <Box
      as="section"
      backgroundColor={"#181818"}
      padding={"20px 0"}
      textAlign={"center"}
    >
      <Text color={"#F9F9F9"} fontSize={"16px"} fontWeight={"500"}>
        Ganhe R$ 10,00 de desconto no frete
      </Text>
    </Box>
  );
}
