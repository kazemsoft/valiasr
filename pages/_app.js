import '../assets/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import Header from '../components/Header/Header';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import CustomContainer from '../components/global/CustomContainer/CustomContainer';
import '../styles/globals.css';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CustomContainer>
        <Header />
      </CustomContainer>
      <Component {...pageProps} />
      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
