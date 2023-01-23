import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { Box, ChakraProvider } from "@chakra-ui/react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box className={montserrat.className} bgColor={"#F9F9F9"}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
