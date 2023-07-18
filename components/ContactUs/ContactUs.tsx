import { Box, Grid, GridItem, HStack, Stack } from '@chakra-ui/react';
import Form from './Form';
import CompanyInfo from './CompanyInfo';

const ContactUs = () => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
      gap={4}
    >
      <GridItem colSpan={{ base: 1, md: 4 }}>
        <CompanyInfo />
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Form />
      </GridItem>
    </Grid>
  );
};

export default ContactUs;
