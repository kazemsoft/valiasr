import "../assets/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Header from "../components/Header/Header";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import CustomContainer from "../components/CustomContainer/CustomContainer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CustomContainer>
        <Header />
      </CustomContainer>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
