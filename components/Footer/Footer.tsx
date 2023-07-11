import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';

const Footer = () => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      gap={4}
      height="300px"
      bgColor={'main.textColor'}
    >
      <GridItem colSpan={1}>
        <Image
          width={100}
          height={100}
          alt="valiasr-logo"
          src={'/images/valiasrcs-transparent.png'}
        />
        <Text>Valiasr website design</Text>
        <Text>
          Garmsar, the beginning of Shahid Chamran-Shahid Gholami intersection,
          Valiasr programming office
        </Text>
        <Text>+982334235094</Text>
      </GridItem>
      <GridItem colSpan={1}></GridItem>
      <GridItem colSpan={1}></GridItem>
    </Grid>
  );
};

export default Footer;
