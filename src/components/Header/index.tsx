import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MdHomeFilled, MdShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    <Flex as="header" justify={"center"} width={{ base: "full", md: "100%" }}>
      <Flex
        as="nav"
        justify={"space-between"}
        margin={{ base: "0 16px", lg: "0" }}
        padding={"16px 0"}
        width={{ base: "full", md: "1170px" }}
      >
        <Link href={"/"}>
          <MdHomeFilled size={32} />
        </Link>
        <Text fontSize={"20px"} fontWeight={"500"}>
          JordanShoes
        </Text>
        <Link href={"/"}>
          <MdShoppingCart size={32} />
        </Link>
      </Flex>
    </Flex>
  );
}
