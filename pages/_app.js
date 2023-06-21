import "../assets/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Header from "../components/Header/Header";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={{ base: "full", lg: "6xl" }} marginX={"auto"}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
