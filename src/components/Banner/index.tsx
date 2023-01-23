import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      as="section"
      bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('/wallpaper.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={"cover"}
      justify={"center"}
      objectFit="cover"
      padding={{ base: "100px 0", md: "100px" }}
      width={{ base: "full", md: "100%" }}
    >
      <Flex
        direction={"column"}
        margin={{ base: "0 16px", lg: "0" }}
        maxW={{ base: "full", md: "1170px" }}
      >
        <Heading
          color="#F9F9F9"
          fontSize={{ base: "28px", md: "48px" }}
          fontWeight={{ base: "700", lg: "600" }}
          mb={{ base: "12px", md: "26px" }}
        >
          A melhor loja de Jordan
        </Heading>
        <Text
          color="#F9F9F9"
          fontSize={{ base: "16px", md: "24px" }}
          lineHeight={{ base: "29px", md: "39px" }}
          maxW={{ base: "100%", md: "55%" }}
        >
          O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
          jogador Michael Jordan.
        </Text>
      </Flex>
    </Flex>
  );
}
